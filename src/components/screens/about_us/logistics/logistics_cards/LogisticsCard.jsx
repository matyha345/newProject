import styles from './LogisticsCard.module.scss'

const LogisticsCard = ({ svg, title, text }) => {
	return (
		<>
			<div className={styles.card}>
				<div className={styles.top}>
					<img src={svg} alt='#' />
				</div>
				<div className={styles.bottom}>
					<h1>{title}</h1>
					<p>{text}</p>
				</div>
			</div>
		</>
	)
}

export default LogisticsCard
