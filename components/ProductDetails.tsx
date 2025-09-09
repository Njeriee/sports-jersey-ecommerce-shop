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
    const hasDiscount = product.oldPrice > product.price
    const percentageDiscount = Math.round(
        ((product.oldPrice - product.price) / product.oldPrice) * 100
    )

    const [quantity, setQuantity] = useState(1)

    return (
        <div className={styles.wrapper}>
            <div className={styles.imageWrapper}>
                <div className={styles.mainImage}>
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
                <div className={styles.formText}>
                    <h3>{product.name}</h3>
                    <div className={styles.priceDetails}>
                        {
                            hasDiscount ? (
                                <div className={styles.prices}>
                                    <p className={styles.newprice}>₤{product.price}</p>
                                    <p className={styles.oldprice}>₤{product.oldPrice}</p>
                                    <p className={styles.discount}>Save {percentageDiscount}%</p>
                                </div>
                            ) :
                                (
                                    <div>
                                        <p className={styles.newprice}>₤{product.price}</p>
                                    </div>
                                )
                        }
                        <button className={styles.addToFavorites} >Add to favorites</button>

                    </div>
                    <div className={styles.details}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque euismod lacinia aliquam. Morbi est nis, at lacus.
                            Donec ornare, dui vel facilisis luctus, metus mi ttitor erat sapien
                            scelerisque nunc. Pellentesque ornare elit tellus...
                            <span>Read more</span>
                        </p>
                    </div>
                </div>
                <div>
                    <form action="">
                        <div className={styles.formGroup}>
                            <label htmlFor="size">Size :</label>
                            <div className={styles.size}>
                                <select id="size" name="size" defaultValue="">
                                    <option value="" disabled hidden>
                                        Select a shirt size
                                    </option>
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                    <option value="XL"></option>
                                </select>
                                <button>Size Chart</button>
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder="What is the name you would like to put on the shirt?" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="">Number on Shirt</label>
                            <input type="text" placeholder="Enter a number between 0 and 99" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="Size">Patch</label>
                            <select id="size" name="size" defaultValue="">
                                <option value="" disabled hidden>
                                    Select a patch
                                </option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                                <option value="XL"></option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="quantity">Quantity</label>
                            <input
                                className={styles.quantity}
                                id="quantity"
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                            />
                        </div>
                        <button className={styles.addToCart}>Add to cart</button>
                    </form>
                </div>
            </div>
        </div>
    )
}