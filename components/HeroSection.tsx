'use client'

import { useEffect, useState } from "react"
import styles from './HeroSection.module.css'

type HeroSectionProps = {
    imageUrls: string[]
}

export default function HeroSection({ imageUrls }: HeroSectionProps) {
    const [index, setImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex(prev =>
                prev === imageUrls.length - 1 ? 0 : prev + 1
            )
        }, 4000) 

        return () => clearInterval(interval) // cleanup on unmount
    }, [])

    return (
        <div className={styles.heroWrapper}>
            <div className={styles.heroImage} >
                <img style={{ height: "100%", width: "100%", objectFit: "cover" }} src={imageUrls[index]} alt="" />
            </div>

            <div className={styles.heroText}>
                <h1>Your favorite customized <br />
                    <span>Club Jerseys.</span>
                </h1>
            </div>

            <div className={styles.heroBtns}>
                <div>
                    {imageUrls.map((_, i) => (
                        // buttons to navigate to specific images
                        <div key={i} onClick={() => setImageIndex(i)}
                            className={`${styles.heroNavBtn} ${index === i ? styles.active : ""}`}></div>
                    ))}
                </div>
                <div className={styles.heroShopBtn}>
                    <div style={{ margin: "10px", width: "70%" }} >Shop now</div>
                    <div style={{ width: "30%", backgroundColor: "white" }} ></div>
                </div>
            </div>
            <div className={styles.heroCards}>
                <div className={styles.heroCard}>
                    <div className={styles.cuboid}>
                        <i>i</i>
                    </div>
                    <div className={styles.cardText}>
                        <h3>Secure Shipping</h3>
                        <p>on all oders</p>
                    </div>
                </div>
                <div className={styles.heroCard}>
                    <div className={styles.cuboid}>
                        <i>i</i>
                    </div>
                    <div className={styles.cardText}>
                        <h3>Telephone</h3>
                        <p>+1 23 456 7890 </p>
                    </div>
                </div>
                <div className={styles.heroCard}>
                    <div className={styles.cuboid}>
                        <i>i</i>
                    </div>
                    <div className={styles.cardText}>
                        <h3>Chat Whatsapp</h3>
                        <p>Mon - Fri 9.00 - 21.00
                            Sat - Sun 9.00 - 17.00
                        </p>
                    </div>
                </div>
                <div className={styles.heroCard}>
                    <div className={styles.cuboid}>
                        <i>i</i>
                    </div>
                    <div className={styles.cardText}>
                        <h3>Quality Guarantee</h3>
                        <p>Verified Purchase Reviews</p>
                    </div>
                </div>
            </div>
        </div>

    )

}