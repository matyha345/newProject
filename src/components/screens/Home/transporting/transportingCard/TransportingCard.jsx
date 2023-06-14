import styles from '../Transporting.module.scss'

const TransportingCard = ({ img, title, text }) => {
	return (
		<>
			<div className={styles.images}>
				<div className={styles.image}>
					<img src={img} alt='#' />
					<div className={styles.text}>
						<h2>{title}</h2>
						<p>{text}</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default TransportingCard
