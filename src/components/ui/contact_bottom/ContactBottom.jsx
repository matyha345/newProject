import styles from './ContactBottom.module.scss'

import img from '/images/image/contact.jpg'
import img1 from '/images/image/contact1.jpg'
import img2 from '/images/image/contact2.jpg'
import img3 from '/images/image/contact3.jpg'

const ContactBottom = () => {
	return (
		<>
			<div className={styles.bottom}>
				<div className={styles.images}>
					<img src={img} alt='#' />
					<p className={styles.one}> Studio Green</p>
				</div>
				<div className={styles.images}>
					<img src={img1} alt='#' />
					<p className={styles.two}> NORTO</p>
				</div>
				<div className={styles.images}>
					<img src={img2} alt='#' />
					<p className={styles.three}> Points <br /> one</p>
				</div>
				<div className={styles.images}>
					<img src={img3} alt='#' />
					<p className={styles.four}>
						Out Of The
                         <br /> Sand Box
					</p>
				</div>
			</div>
		</>
	)
}

export default ContactBottom
