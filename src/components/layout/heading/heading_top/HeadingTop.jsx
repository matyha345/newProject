import styles from './headingTop.module.scss'

const HeadingTop = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className='container'>
					<div className={styles.top}>
						<a href='/' className={styles.logo}>
							<img src='/images/svg/logo.svg' alt='logo' />
							<p>TransitFlow</p>
						</a>
						<div className={styles.time}>
							<div className={styles.block}>
								<div className={styles.svg}>
									<img src='/images/svg/header/clock.svg' alt='clock' />
								</div>
								<p>
									Mon - Sat 9.00 - 18.00 <br /> Sunday Closed
								</p>
							</div>
							<div className={styles.block}>
								<div className={styles.svg}>
									<img src='/images/svg/header/email.svg' alt='email' />
								</div>
								<a href='mailto:contact@logistics.com'>
									Email <br /> contact@logistics.com
								</a>
							</div>
							<div className={styles.block}>
								<div className={styles.svg}>
									<img src='/images/svg/header/phone.svg' alt='phone' />
								</div>
								<a href='tel:+00112365489'>
									Call Us <br /> (00) 112 365 489
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default HeadingTop
