'use client'

import Link from 'next/link'
import styles from './Nav.module.css'
import { usePathname } from 'next/navigation';

export default function Navbar() {

     const pathname = usePathname();

    return (
        <section className={styles.navbarContainer}>
            <div style={{ width: "15%", height:"100%", backgroundColor: "#FADD18" }}></div>
            <div style={{ width: "85%", display: "grid", gridTemplateRows: " 1fr 1fr;" }}>
                <div className={styles.searchBar}>
                    <div className={styles.dropDown} style={{width:"10%"}}>
                        <button>All Categories <i >i</i></button>
                        <div className={styles.dropDownContent}>
                            <a href="#">T-shirts</a>
                            <a href="#">NBA</a>
                            <a href="#">Tracksuits</a>
                            <a href="#">Kids</a>
                        </div>
                    </div>
                    <div className={styles.searchForm}>
                        <div className={styles.searchInput}>
                            <input name="fsrch" id="fsrch" placeholder="What are you looking for?" />
                        </div>
                        <div className={styles.searchSubmit}>
                            <div style={{ backgroundColor: "#FADD18", padding: "10px", width: "120px", textAlign: "center" }}>
                                <input type="submit" value="Search"></input>
                            </div>
                            <div style={{ backgroundColor: "black", color:"white", textAlign:"center", width: "40px" }}><i>i</i></div>
                        </div>
                    </div>
                    <div className={styles.shoppingCart}>
                        <img src="/shopping cart.svg" alt="" />
                    </div>
                    <div className={styles.userProfile}>
                        <img src="/profile img.svg" alt="" />
                    </div>
                </div>
                <div className={styles.navMenu}>
                    <Link href="/" className={pathname === "/" ? styles.active : ""}>Home</Link>
                    <div className={styles.dropDown}>
                        <button>T-shirts <i>i</i></button>
                        <div className={styles.dropDownContent} >
                            <a href="#">Larger</a>
                            <a href="#">Extra Large</a>
                            <a href="#">XXL</a>
                        </div>
                    </div>
                    <div className={styles.dropDown}>
                        <button>NBA<i>
                            </i></button>
                        <div className={styles.dropDownContent} >
                            <a href="#">Larger</a>
                            <a href="#">Extra Large</a>
                            <a href="#">XXL</a>
                        </div>
                    </div>
                    <div className={styles.dropDown}>
                        <button>Tracksuits <i>i </i></button>
                        <div className={styles.dropDownContent} >
                            <a href="#">Larger</a>
                            <a href="#">Extra Large</a>
                            <a href="#">XXL</a>
                        </div>
                    </div>
                    <a href="#">Products Delivery . 1 - 2 days</a>
                    <a href="#">Contact</a>
                    <a href="#">Reviews</a>
                </div>
            </div>
        </section>
    )
}