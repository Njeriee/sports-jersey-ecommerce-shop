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
    const hasDiscount =  product.oldPrice > product.price
    const percentageDiscount = Math.round(
        ((product.oldPrice - product.price) / product.oldPrice) * 100
    )

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
                    <div className={styles.prices}>
                        {
                            hasDiscount ? (
                                <div>
                                    ₤{product.price}
                                    ₤{product.oldPrice}
                                    {percentageDiscount}
                                </div>
                            ) :
                            (
                                <div>
                                    ₤{product.price}
                                </div>
                            )
                        }
                        <div>
                            Add to favorites
                        </div>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod lacinia aliquam. Morbi est nis, at lacus. Donec ornare, dui vel facilisis luctus, metus mi ttitor erat sapien scelerisque nunc. Pellentesque ornare elit tellus... Read More
                        </p>
                    </div>
                </div>
                <form action="">

                </form>
            </div>
        </div>
    )
}