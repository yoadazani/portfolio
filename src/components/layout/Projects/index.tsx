import styles from './Projects.module.css';
import {Button, ProjectCard} from "@/components";
import {projects} from "@/data/projects.ts";


export const Projects = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.divider}>
                <div className={styles.projects}>
                    <div className={styles.header}>
                        <h1>Projects</h1>
                        <Button href="#contact">contact me</Button>
                    </div>
                    <div className={styles.projects__content}>
                        {projects.map((project) => (
                            <ProjectCard key={project.id} {...project}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};