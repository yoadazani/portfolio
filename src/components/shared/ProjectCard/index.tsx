import styles from './ProjectCard.module.css';
import {Button} from "@/components";
import {ProjectT} from "@/Types/ProjectT.ts";
import {useState} from "react";

export const ProjectCard = (props: ProjectT) => {
    const [cardHover, setCardHover] = useState(false);

    return (
            <div className={styles.card}>
                <div
                    className={styles.card__header}
                    onMouseOver={() => setCardHover(true)}
                    onMouseLeave={() => setCardHover(false)}
                >
                    <img width={540} height={540} src={props.image} alt={props.name}/>
                    {cardHover ? <div className={styles.card__overlay}>
                        <Button onClick={() => window.open(props.link)}>View project</Button>
                        <Button onClick={() => window.open(props.code)}>View code</Button>
                    </div> : null}
                </div>
                <div className={styles.card__body}>
                    <h1 className={styles.project__title}>{props.name}</h1>
                    <div className={styles.project__skills}>{
                        props.tags.map((tag, i) => <span key={i}>{tag}</span>)
                    }</div>
                </div>
                <div className={styles.card__footer}>
                    <Button onClick={() => window.open(props.link)}>View project</Button>
                    <Button onClick={() => window.open(props.code)}>View code</Button>
                </div>
            </div>
    );
}