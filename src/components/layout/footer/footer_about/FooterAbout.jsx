import styles from './FooterAbout.module.scss'

const FooterAbout = () => {
	return (
		<>
			<ul className={styles.about}>
				<li className={styles.list}>
					<a href='#' className={styles.list}>
						About Us
					</a>
				</li>
				<li className={styles.list}>
					<a href='#' className={styles.list}>
						Our Team
					</a>
				</li>
				<li className={styles.list}>
					<a href='#' className={styles.list}>
						Our Project
					</a>
				</li>
				<li className={styles.list}>
					<a href='#' className={styles.list}>
						Pricing
					</a>
				</li>
				<li className={styles.list}>
					<a href='#' className={styles.list}>
						Contact
					</a>
				</li>
			</ul>
			
			<ul className={styles.utility}>
				<li className={styles.list}>
					<a href='#' className={styles.list}>
						Style Guide
					</a>
				</li>
				<li className={styles.list}>
					<a href='#' className={styles.list}>
						Changelog
					</a>
				</li>
				<li className={styles.list}>
					<a href='#' className={styles.list}>
						Licenses
					</a>
				</li>
				<li className={styles.list}>
					<a href='#' className={styles.list}>
						Protected
					</a>
				</li>
				<li className={styles.list}>
					<a href='#' className={styles.list}>
						Not Found
					</a>
				</li>
			</ul>
		</>
	)
}

export default FooterAbout
