import styles from './ProductCard.module.css'


export default function ProductCard(){
    return(
        <div className={styles.cardWrapper}>
            <div className={styles.cardPhoto}>
                <img style={{width:"300px",height:"300px"}} src="/Rectangle 20.jpg" alt="" />
            </div>
            <div className={styles.discount}>
                save 67%
            </div>
            <div className={styles.cardText}>
                <p>Man United 21 -22</p>
                <div className={styles.prices}>
                    <p className={styles.newprice}>₤30.00</p>
                    <p className={styles.oldprice}>₤99.95</p>
                </div>
            </div>
        </div>
    )
}