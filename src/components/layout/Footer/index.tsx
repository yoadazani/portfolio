import styles from './Footer.module.css';
import vector_mobile from "@/assets/hero-vector-mobile.svg";
import vector_tablet from "@/assets/hero-vector-tablet.svg";
import vector_desktop from "@/assets/hero-vector-desktop.svg";
import {Contact, Nav} from "@/components";

export const Footer = () => {
    return (
        <footer className={styles.footer} id="contact">
            <picture>
                <source media="(max-width: 45rem)" srcSet={vector_mobile}/>
                <source media="(max-width: 62rem)" srcSet={vector_tablet}/>
                <source media="(max-width: 90rem)" srcSet={vector_desktop}/>
                <img src={vector_desktop} alt="vector" className={styles.vector}/>
            </picture>

            <div className={styles.wrapper}>
                <Contact />

                <div className={styles.divider}>
                    <Nav />
                </div>
            </div>
        </footer>
    );
};