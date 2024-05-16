import styles from './Button.module.css';
import {AnchorHTMLAttributes, ReactNode} from "react";

interface ButtonT extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode
}

export const Button = (props: ButtonT) => {
    return <a
        href={props?.href}
        onClick={props.onClick}
        className={styles.contact__me}
    >
        {props.children}
    </a>
};