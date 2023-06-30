import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import styles from './MainBlogContent.module.scss'

import imgShip from './cargo_ship.jpg'

const MainBlogContent = () => {
	return (
		<div className={styles.main}>
			<div className={styles.textTop}>
				<h1 className={styles.title}>Your Logistics Solutions</h1>

				<p className={styles.texts}>
					Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam
					lobortis dapibus libero vel porttitor. Nulla tempor elit nec feugiat
					tempus.Phasellus at quam hendrerit semper feugiat id nunc. Morbi quis
					justo velit. Duis semper lacus scelerisque, aliquam leo quis,
					porttitor leo Fusce lectus ex pretium[...]
				</p>
			</div>

			<div className={styles.textBg}>
				<p className={styles.text}>
					“Digitization within transport and logistics means seamless service to
					our customers, visibility in the supply chain, and driving a more
					efficient business.”
				</p>
			</div>

			<div className={styles.textImg}>
				<h1 className={styles.title}>
					Safest Logistics Solutions Provider With Integrity
				</h1>

				<p className={styles.texts}>
					Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam
					lobortis dapibus libero vel porttitor. Nulla tempor elit nec
					attempus.Phasellus at quam hendrerit semper David Warner nunc. Morbi
					quis justo velit. Duis semper lacus scelerisque, aliquam leo quis,
					porttitor leo Fusce lectus ex pretium[...]
				</p>

				<div className={styles.images}>
					<img src={imgShip} alt='ship' />
				</div>

				<h3 className={styles.centerText}>The Cargo Ship</h3>
			</div>
			<div className={styles.bottomText}>
				<p className={styles.textBottom}>
					Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam
					lobortis dapibus libero vel porttitor. Nulla tempor elit nec
					attempus.Phasellus at quam hendrerit semper David Warner nunc. Morbi
					quis justo velit. Duis semper lacus scelerisque, aliquam leo quis,
					porttitor leo Fusce lectus ex pretium.
				</p>

				<p className={styles.textBottomSpan}>
					Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam
					lobortis dapib libero vel porttitor. Nulla tempor elit nec feugiat
					tempus Phasellus atquam.
				</p>
			</div>

			<div className={styles.icons}>
				<div className={styles.icon}>
					<a href='#' className={styles.iconDiv}>
						<FaInstagram fontSize={30} />
					</a>
					<a href='#' className={styles.iconDiv}>
						<FaFacebook fontSize={28} />
					</a>
					<a href='#' className={styles.iconDiv}>
						<AiOutlineTwitter fontSize={30} />
					</a>
					<a href='#' className={styles.iconDiv}>
						<AiFillLinkedin fontSize={30} />
					</a>
				</div>

				<div className={styles.category}>Category : Shipping</div>
			</div>
		</div>
	)
}
export default MainBlogContent
