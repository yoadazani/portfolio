import styles from './FormError.module.css'
import {MdOutlineErrorOutline} from "react-icons/md";

export const FormError = (props: { error_message: string }) => {
    return (
        <div className={styles.error}>
            <MdOutlineErrorOutline className={styles.error__icon}/>
            <span className={styles.error__message}>
                {props.error_message}
            </span>
        </div>
    );
};