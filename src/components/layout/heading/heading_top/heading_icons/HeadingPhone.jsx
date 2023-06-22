import styles from './HeadingIcons.module.scss'

const HeadingPhone = () => {
	return (
		<>
			<div className={styles.block}>
				<div className={styles.svg}>
					<img src='/images/svg/header/phone.svg' alt='phone' />
				</div>
				<a href='tel:+00112365489'>
					Call Us <br /> (00) 112 365 489
				</a>
			</div>
		</>
	)
}

export default HeadingPhone
