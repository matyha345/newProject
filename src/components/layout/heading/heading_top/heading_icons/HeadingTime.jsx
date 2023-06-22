import styles from './HeadingIcons.module.scss'

const HeadingTime = () => {
	return (
		<>
			<div className={styles.block}>
				<div className={styles.svg}>
					<img src='/images/svg/header/clock.svg' alt='clock' />
				</div>
				<p>
					Mon - Sat 9.00 - 18.00 <br /> Sunday Closed
				</p>
			</div>
		</>
	)
}

export default HeadingTime
