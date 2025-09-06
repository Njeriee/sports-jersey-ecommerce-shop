import { notFound } from "next/navigation"
import products from "@/lib/products.json"
import styles from './ProductPage.module.css'
import ProductDetails from "@/components/ProductDetails"


interface Product {
    id: string
    name: string
    price: number
    oldPrice: number
    image: string
}

export default function ProductPage({ params }: { params: { id: string } }) {

    const product: Product | undefined = products.find(p => p.id === params.id)
    if (!product) return notFound

    return (
        <section className={styles.wrapper}>
            <ProductDetails product={product}/>
        </section>
    )
}