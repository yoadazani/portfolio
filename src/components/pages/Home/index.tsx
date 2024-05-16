import {Hero, Nav, Projects} from "@/components";
import styles from './Home.module.css';
import {Experiences} from "@/components";
import {Footer} from "@/components/layout/Footer";

export const Home = () => {

    return <main className={styles.main}>
        <Nav/>
        <Hero/>

        <Experiences />

        <Projects />

        <Footer />
    </main>
};