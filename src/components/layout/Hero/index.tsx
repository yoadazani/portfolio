import styles from './Hero.module.css'
import hero_image_desktop from '@/assets/hero-img-desktop.png'
import hero_image_tablet from '@/assets/hero-img-tablet.png'
import hero_image_mobile from '@/assets/hero-img-mobile.png'

import vector_desktop from '@/assets/hero-vector-desktop.svg'
import vector_tablet from '@/assets/hero-vector-tablet.svg'
import vector_mobile from '@/assets/hero-vector-mobile.svg'
import circle from '@/assets/circle.svg'
import circle_mobile from '@/assets/circle-mobile.svg'
import {Button} from "@/components";

export const Hero = () => {

    return <section className={styles.hero}>
        <picture>
            <source media="(max-width: 45rem)" srcSet={vector_mobile}/>
            <source media="(max-width: 62rem)" srcSet={vector_tablet}/>
            <source media="(max-width: 90rem)" srcSet={vector_desktop}/>
            <img src={vector_desktop} alt="vector" className={styles.vector}/>
        </picture>


        <div className={styles.wrapper}>
            <article className={styles.hero__content}>
                <h1 className={styles.hero__headline}>
                    Nice to meet you! <br /> I'm <span>Yoad Azani</span>
                </h1>
                <p className={styles.hero__description}>
                    With extensive programming experience since age 9, I've cultivated a
                    fervent passion for machine learning.
                    Committed to continuous learning, I aspire to leverage my competencies in this field to eventually
                    build my career.
                </p>

                <Button href="#contact">contact me</Button>
            </article>

            <div>
                <picture>
                    <source media="(max-width: 62rem)" srcSet={circle_mobile}/>
                    <img src={circle} alt="vector" className={styles.circle}/>
                </picture>
                <picture className={styles.hero__image}>
                    <source media="(max-width: 45rem)" width={235} height={358} srcSet={hero_image_mobile}/>
                    <source media={'(max-width: 62rem)'} width={383} height={418} srcSet={hero_image_tablet}/>
                    <source media={'(max-width: 90rem)'} width={445} height={720} srcSet={hero_image_desktop}/>
                    <img src={hero_image_desktop} alt="hero"/>
                </picture>
            </div>
        </div>
    </section>

}