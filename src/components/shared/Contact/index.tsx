import styles from "./Contact.module.css";
import {useForm} from "react-hook-form";
import {FormT} from "@/Types";
import zod from "zod";
import {zodResolver} from '@hookform/resolvers/zod';
import {contactFormSchema} from "@/Validations/contactForm.ts";
import {FormError} from "@/components";

import email_js from '@emailjs/browser';
import {useState} from "react";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const Contact = () => {
    const [emailSent, setEmailSent] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors, touchedFields},
        reset
    } = useForm<FormT>({
        mode: 'onTouched',
        resolver: zodResolver(contactFormSchema)
    })

    const handleSubmitForm = async (formData: zod.infer<typeof contactFormSchema>) => {
        const response = await email_js.send(SERVICE_ID, TEMPLATE_ID, formData, {publicKey: PUBLIC_KEY});

        if (response.status === 200) {
            setEmailSent(true);
        }
        reset();
    }

    return (
        <div className={styles.even__column}>
            <div className={styles.contact__text}>
                <h1>Contact</h1>
                <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get
                    back to you as soon as possible.</p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit(handleSubmitForm)}>
                <div>
                    <input
                        type="text"
                        placeholder="NAME"
                        className={
                            `${errors.user_name && touchedFields.user_name && styles.input__error}
                             ${!errors.user_name && touchedFields.user_name && styles.input__success}`
                        }
                        {...register("user_name", {required: true})}
                    />
                    {errors.user_name && touchedFields && <FormError error_message={errors.user_name.message!}/>}
                </div>

                <div>
                    <input
                        type="email"
                        placeholder="EMAIL"
                        className={
                            `${errors.user_email && touchedFields.user_email && styles.input__error}
                             ${!errors.user_email && touchedFields.user_email && styles.input__success}`
                        }
                        {...register("user_email", {required: true})}
                    />
                    {errors.user_email && touchedFields && <FormError error_message={errors.user_email.message!}/>}
                </div>

                <div>
                    <textarea
                        placeholder="MESSAGE"
                        cols={30} rows={5}
                        maxLength={200}
                        className={
                            `${errors.message && touchedFields.message && styles.input__error}
                             ${!errors.message && touchedFields.message && styles.input__success}`
                        }
                        {...register("message", {required: true})}
                    />
                    {errors.message && touchedFields && <FormError error_message={errors.message.message!}/>}
                </div>

                {
                    emailSent && <p style={{color: "var(--green)"}}>Email sent successfully</p>
                }
                <button type="submit" className={styles.button}>Send message</button>
            </form>
        </div>
    );
};

