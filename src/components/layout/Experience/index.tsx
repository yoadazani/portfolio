import styles from './Experience.module.css';
import {experiences} from "@/data/experiences.ts";
import {ExperienceCard} from "@/components";

import vector_desktop from '@/assets/experience-vector-desktop.svg';
import vector_tablet from '@/assets/experience-vector-tablet.svg';
import vector_mobile from '@/assets/experience-vector-mobile.svg';
export const Experiences = () => {
    return <section className={styles.experiences}>
        <picture className={styles.vector}>
            <source media="(max-width: 45rem)" srcSet={vector_mobile} />
            <source media="(max-width: 62rem)" srcSet={vector_tablet} />
            <source media="(max-width: 90rem)" srcSet={vector_desktop} />
            <img src={vector_desktop} alt="vector"/>
        </picture>
        <div className={`${styles.divider} ${styles.wrapper}`}>
            <div className={styles.experiences__content}>
                {
                    experiences.map((experience) => <ExperienceCard key={experience.id} {...experience}/>)
                }
            </div>
        </div>
    </section>
};