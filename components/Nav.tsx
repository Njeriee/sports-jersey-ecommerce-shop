import styles from './Nav.module.css'

export default function Navbar() {
    return (
        <section className={styles.navbarContainer}>
            <div style={{ width: "10%", backgroundColor: "#FADD18" }}></div>
            <div style={{ width: "90%", display: "grid", gridTemplateRows: " 1fr 1fr;" }}>
                <div className={styles.searchBar}>
                    <div className={styles.dropDown}>
                        <button>All Categories <i style={{padding:""}}>i</i> </button>
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
                </div>
                <div className={styles.navMenu}>
                    <a href="/home">Home</a>
                    <div className={styles.dropDown}>
                        <button>T-shirts <i>i</i></button>
                        <div className={styles.dropDownContent} >
                            <a href="#">Larger</a>
                            <a href="#">Extra Large</a>
                            <a href="#">XXL</a>
                        </div>
                    </div>
                    <div className={styles.dropDown}>
                        <button>NBA<i>i </i></button>
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
                    <a href="/contact">Contact</a>
                    <a href="#">Reviews</a>
                </div>
            </div>
        </section>
    )
}