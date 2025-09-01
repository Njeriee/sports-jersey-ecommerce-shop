'use client'

import styles from './ProductSection.module.css'
import products from "@/lib/products.json";
import ProductCard from './ProductCard';
import { useState } from 'react';


export default function ProductSection() {

    const [index, setCurrentIndex] = useState(0);
    const visibleCount = 5; 

    const next = () => {
        setCurrentIndex((prev) =>
            prev + visibleCount < products.length ? prev + visibleCount : 0
        );
    };

    const prev = () => {
        setCurrentIndex((prev) =>
            prev - visibleCount >= 0 ? prev - visibleCount : products.length - visibleCount
        );
    };

    return (
        <div className={styles.productSection}>
            <div className={styles.productHeadingAndButtons} style={{display: 'flex',justifyContent:'space-between'}} >
                <h2>Most popular t-shirts</h2>
                <div>
                    <button onClick={next}>next</button>
                    <button onClick={prev}>prev</button>
                </div>
            </div>
            <div className={styles.productCarousel}>
                <div className={styles.productTrack} style={{ transform: `translateX(-${index * 220}px)` }} >
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}