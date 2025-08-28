import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

import styles from './page.module.css'
import products from "@/lib/products.json";

export default function Home() {

  const carouselImages: string[] = [
    '/image 1.jpg',
    '/image 2.jpeg',
    '/image 3.jpg',
    '/image 4.jpg',
    '/image 5.jpg'
  ]

  const legueImages: string[] = [
    '/champions league.jpg',
    '/champions league.jpg',
    '/champions league.jpg',
    '/champions league.jpg',
    '/champions league.jpg',
  ]

  return (
    <div style={{ display: "grid", gridAutoColumns: 'auto' }}>
      <Nav />
      <div style={{ margin: "68px", display: "" }}>
        <HeroSection imageUrls={carouselImages} />
        <div className={styles.productSection}>
          <h2>Most popular t-shirts</h2>
          <div className= {styles.productCarousel}>
            <div className={styles.productTrack}>
              {products.map((product)=>(
                <ProductCard key={product.id} product = {product} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.leguesSection}>
          <h2>country leagues</h2>
          <div className={styles.leguesCard}>
            {legueImages.map((image)=>(
              <img key = {image} src={image} alt="" />
            ))}
            <div>
              <img src="/champions legue.jpg" alt="" />
              <p>Champions League </p>
            </div>
          </div>
        </div>
        <div className={styles.otherCollectionsSection}>
          <h2>Other collections</h2>
          <div className={styles.card}>
            <div className={styles.collectionImage}>
              <img src="/kids collection.jpg" alt="" />
            </div>
            <div className={styles.collectionLabel}>
              <div><p>kids</p></div>
              <div> i </div>
            </div>
          </div>
        </div>
      </div>
       <Footer/>
    </div>
  )
}


{/* <div>
  {imageUrls.map((_, i) => (
    // buttons to navigate to specific images
    <div key={i} onClick={() => setImageIndex(i)}
      className={`${styles.heroNavBtn} ${index === i ? styles.active : ""}`}></div>
  ))}
</div> */}
