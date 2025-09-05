import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProductSection from "@/components/ProductSection";

import styles from './page.module.css';
import HeroSection from "@/components/HeroSection";


export default function Home() {

  const carouselImages: string[] = [
    '/image 1.jpg',
    '/close-up-athlete-playing-soccer.jpg',
    '/soccer-game-concept.jpg',
    '/image 4.jpg',
    '/soccer-players-action-professional-stadium.jpg'
  ]

  const Leagues = [
    { name: "Champions League", image: "/champions legue.jpg" },
    { name: "Europe League", image: "/europa league.jpg" },
    { name: "Copa America", image: "/copa america.png" },
    { name: "Asian Cup", image: "/asian cup.png" },
    { name: "African Nations Cup", image: "/africa cup.jpg" }
  ]

  const Collections = [
    { name: "Kids", image: "/kids collection.jpg" },
    { name: "Large Sizes", image: "/large sizes.jpg" },
    { name: "Goalkeeper", image: "/goal keeper.jpg" },
    { name: "Authentic/Pro Player", image: "/authentic pro player.jpg" },
    { name: "Shorts", image: "/shorts.jpg" },
    { name: "socks", image: "/socks.jpg" }






  ]

  return (
    <div>
      <Nav />
      <div style={{ margin: "4.5rem"}}>
        
        <HeroSection imageUrls={carouselImages} />

        <div>
          <ProductSection/>
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

        <div className={styles.collectionsSection}>
          <h2>Other collections</h2>
          <div className={styles.collectionDisplay}>
            {
              Collections.map((collection) => (
                <div key={collection.name} className={styles.collectionCard}>
                  <img src={collection.image} alt={collection.name} />
                  <div className={styles.collectionLabel}>
                    <p>{collection.name}</p>
                    <button>btn</button>
                  </div>
                  <div className={styles.collectionLabel2}></div>
                </div>
              ))
            }
          </div>
        </div>

        <section className={styles.socials}>
          <div className={styles.socialsCard}>
            <img src="/personalization.png" alt="" />
            <div className={styles.socialsTxt}>
              <h3>personalization</h3>
              <p>
                Put a custom print on the football shirt of your choice with
                our Personalization service
              </p>
              <p>
                Tell us your name and what number and we put it <span>Free!!!</span>
              </p>
            </div>
          </div>
          <div className={styles.socialsCard}>
            <img src="/socials.png" alt="" />
            <div className={styles.socialsTxt}>
              <h3>Social networks</h3>
              <p>Share your shirts with us with the #CamisetasFutbolSpainnn</p>
              <div>
                <a href="">fb</a>
                <a href="">x</a>
                <a href="">insta</a>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  )
}

