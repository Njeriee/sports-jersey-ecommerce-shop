import { notFound } from "next/navigation"
import products from "@/lib/products.json"
import styles from './ProductPage.module.css'
import ProductDetails from "@/components/ProductDetails"
import Navbar from "@/components/Nav"
import Footer from "@/components/Footer"


// interface Product {
//     id: string
//     name: string
//     price: number
//     oldPrice: number
//     image: string
// }

type Params = Promise<{ id: string }>


export default async function ProductPage( props: {
    params: Params
}) {
    const params = await props.params
    const product = products.find((p) => p.id === params.id)

    if (!product) return notFound()

    return (
        <>
            <Navbar />
            <section className={styles.wrapper}>
                <ProductDetails product={product} />
            </section>
            <Footer />
        </>

    )
}

// export function generateStaticParams() {
//   return products.map((p) => ({
//     id: p.id,
//   }))
// }