import styles from './ExperienceCard.module.css';
import {ExperienceT} from "@/Types/ExperienceT.ts";

export const ExperienceCard = (props: ExperienceT) => {
    return (
        <div className={styles.card}>
            <h2>{props.experience}</h2>
            <p>
                {props.years}
                <span> Years Experience</span>
            </p>
        </div>
    );
}