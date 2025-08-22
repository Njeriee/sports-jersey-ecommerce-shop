import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";

import styles from './home.module.css'

export default function LandingPage() {

  const carouselImages: string[] = [
    '/image 1.jpg',
    '/image 2.jpeg',
    '/image 3.jpg',
    '/image 4.jpg',
    '/image 5.jpg'
  ]

  type product = {
    id : number
    category : string
    name : string
    image : string
    new_price : number
    old_price : number
  } 

  const products :product[] = [{
      id : 1,
      category : 'tshirt',
      name: 'manchester united',
      image : '/image 5.jpg',
      new_price: 30.00,
      old_price: 99.95
    },{
      id : 1,
      category : 'tshirt',
      name: 'manchester united',
      image : '/image 5.jpg',
      new_price: 30.00,
      old_price: 99.95
    }]

    // function to calculate discount
    function calculateDiscount(new_price:number,old_price:number):number{
      const discount = old_price - new_price
      return (discount/old_price * 100)
    }
  
  return (
    <div>
      <Nav />
      <div style={{ margin: "68px" }}>
        <HeroSection imageUrls={carouselImages} />
        <div className={styles.productSection}>
          <h2>Most popular t-shirts</h2>
          {/* <p>{products[0].name}</p> */}
          <ProductCard/>
        </div>
        <div className={styles.leguesSection}>
          <h2>country leagueshjvlffffffffffffff</h2>
          <div>
            <img src="" alt="" />
            <p></p>
          </div>Champions league
        </div>
      </div>
    </div>
  )
}
