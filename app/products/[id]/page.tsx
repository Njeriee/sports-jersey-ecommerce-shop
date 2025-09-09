import { notFound } from "next/navigation"
import products from "@/lib/products.json"
import styles from './ProductPage.module.css'
import ProductDetails from "@/components/ProductDetails"
import Navbar from "@/components/Nav"
import Footer from "@/components/Footer"


interface Product {
    id: string
    name: string
    price: number
    oldPrice: number
    image: string
}

type PageProps = {
  params: { id: string }
}

export default function ProductPage({ params }: PageProps) {

    const product: Product | undefined = products.find(p => p.id === params.id)
    if (!product) return notFound

    return (
        <>
        <Navbar/>
        <section className={styles.wrapper}>
            <ProductDetails product={product} />
        </section>
        <Footer/>
        </>
        
    )
}