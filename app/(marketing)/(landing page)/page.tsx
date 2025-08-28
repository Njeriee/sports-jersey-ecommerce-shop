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

  const Leagues = [
    { name: "Champions League", image: "/champions legue.jpg" },
    { name: "Europe League", image: "/europa league.jpg" },
    { name: "Copa America", image: "/champions legue.jpg" },
    { name: "Asian Cup", image: "/champions legue.jpg" },
    { name: "African Nations Cup", image: "/champions legue.jpg" }
  ]

  const Collections = [
    { name: "Kids", image: "/kids collection.jpg" },
    { name: "Large Sizes", image: "/large sizes.jpg" },
    { name: "Goalkeeper", image: "/kids collection.jpg" },
    { name: "Authentic/Pro Player", image: "/large sizes.jpg" },
    { name: "Shorts", image: "/kids collection.jpg" },
    { name: "socks", image: "/large sizes.jpg" }






  ]

  return (
    <div style={{ display: "grid", gridAutoColumns: 'auto' }}>
      <Nav />
      <div style={{ margin: "68px", display: "" }}>
        <HeroSection imageUrls={carouselImages} />
        <div className={styles.productSection}>
          <h2>Most popular t-shirts</h2>
          <div className={styles.productCarousel}>
            <div className={styles.productTrack}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.leguesSection}>
          <h2>country leagues</h2>
          <div className={styles.leaguesDisplay}>
            {
              Leagues.map((league) => (
                <div key={league.name} className={styles.leguesCard}>
                  <img src={league.image} alt={league.name} />
                  <p>{league.name}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className={styles.otherCollectionsSection}>
          <h2>Other collections</h2>
          <div className={styles.collectionDisplay}>
            {
              Collections.map((collection) => (
                <div key={collection.name} className={styles.collectionCard}>
                  <img src={collection.image} alt={collection.name} />
                  <div className={styles.collectionLabel}>
                    <p>{collection.name}</p>
                    <button>vdjhbjh</button>
                  </div>
                </div>
              ))
            }
          </div>  
        </div>
      </div>
      <Footer />
    </div>
  )
}

