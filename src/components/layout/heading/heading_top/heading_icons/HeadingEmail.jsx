import styles from './HeadingIcons.module.scss'

const HeadingEmail = () => {
	return (
		<>
			<div className={styles.block}>
				<div className={styles.svg}>
					<img src='/images/svg/header/email.svg' alt='email' />
				</div>
				<a href='mailto:contact@logistics.com'>
					Email <br /> contact@logistics.com
				</a>
			</div>
		</>
	)
}

export default HeadingEmail
