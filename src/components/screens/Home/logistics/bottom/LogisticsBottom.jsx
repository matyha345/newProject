import styles from './LogisticsBottom.module.scss'

const LogisticsBottom = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<div>1294</div>
				<span></span>
				<p>Delivered Packages</p>
			</div>
			<span></span>
			<div className={styles.content}>
				<div>3594</div>
				<span></span>
				<p>Satisfied Clients</p>
			</div>
		</div>
	)
}

export default LogisticsBottom
