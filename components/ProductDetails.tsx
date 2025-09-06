"use client"

import { useState } from "react"
import styles from "./ProductDetails.module.css"

interface Product {
    id: string
    name: string
    price: number
    oldPrice: number
    image: string
}

const images: string[] = [
    '/Rectangle 20.jpg',
    '/Rectangle 20.jpg',
    '/Rectangle 20.jpg',
    '/Rectangle 20.jpg',
    '/Rectangle 20.jpg',
    '/Rectangle 20.jpg',
]

export default function ProductDetails({ product }: { product: Product }) {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className={styles.wrapper}>
            <div className={styles.imageWrapper}>
                <div>
                    <img src='/Rectangle 20.jpg' alt="Jesse Lingard" />
                </div>
                <div className={styles.thumbnails}>
                    {
                        images.map((url, i) => (
                            <img key={i} src={url} alt=""
                                className={`${styles.thumbnail} ${i === activeIndex ? styles.active : ""}`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))
                    }
                </div>
            </div>
            <div className={styles.Form}>
                <div>
                    <h3>{product.name}</h3>
                    <div>

                    </div>
                </div>
                <form action="">

                </form>
            </div>
        </div>
    )
}