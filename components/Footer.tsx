import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.footerMenu}>
                <div>
                    <h4>Main Menu</h4>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="#">T-shirts</a></li>
                        <li><a href="#">NBA</a></li>
                        <li><a href="#">Tracksuits</a></li>
                        <li><a href="#">Products Delivery . 1 -2 days</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Reviews</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Secondary Menu</h4>
                    <ul>
                        <li><a href="#">Search</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Shipping Policy</a></li>
                        <li><a href="#">Returns Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Subscribe</h4>
                    <p>Subscribe to our mailing list to receive the lates news.</p>
                    <div className={styles.mail}>
                        <input type="text" placeholder='Email Address' />
                        <button>mail</button>
                    </div>
                </div>
                <div>
                    <h4>Follow Us</h4>
                    <p>FB</p>
                    <p>X</p>
                    <p>Insta</p>
                </div>
            </div>
            <div className={styles.copyright}>
                <div>
                    <p>c Jambulani All rights reserved</p>
                </div>
                <div>
                    <p>apple pay</p>
                </div>
            </div>
        </div>
    )
}