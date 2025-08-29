import Link from 'next/link'
import styles from './ProductCard.module.css'

interface Product {
    id: string
    name: string
    price: number
    oldPrice: number
    image: string
}


export default function ProductCard({ product }: { product: Product }) {

    const hasDiscount = product.oldPrice > product.price
    const percentageDiscount = Math.round(
        ((product.oldPrice - product.price) / product.oldPrice) * 100
    )

    return (
        <Link href={'#'}>
            <div className={styles.cardWrapper}>
                <div className={styles.cardPhoto}>
                    <img style={{ width: "300px", height: "300px" }} src="/Rectangle 20.jpg" alt="" />
                    {
                        hasDiscount ? (
                            <div className={styles.discount}>
                                {percentageDiscount} %
                            </div>
                        ) : ('')
                    }
                </div>
                <div className={styles.cardText}>
                    <p>{product.name}</p>
                    <div className={styles.prices}>
                        <p className={styles.newprice}>{product.price}</p>
                        <p className={styles.oldprice}>{product.oldPrice}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}