import {FaGithub, FaLinkedin} from "react-icons/fa";
import {SiFiverr, SiLeetcode} from "react-icons/si";
import styles from './nav.module.css'

export const Nav = () => {
    return (
        <nav className={`${styles.nav} ${styles.wrapper}`}>
            <a href="#" className={styles.nav__link}>yoadhaimazani</a>

            <a href="https://leetcode.com/u/yoad208/" className={styles.social}> <SiLeetcode /> </a>
            <a href="https://github.com/yoadazani" className={styles.social}> <FaGithub /> </a>
            <a href="https://www.linkedin.com/in/yoad-azani/" className={styles.social}> <FaLinkedin /> </a>
            <a href="https://www.fiverr.com/codingwithyoad" className={styles.social}> <SiFiverr /> </a>
        </nav>
    );
};