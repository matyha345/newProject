import styles from './SolutionsCard.module.scss'

const SolutionsCard = ({ svg, label, text }) => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.svg}>
					<img width={49} height={39} src={svg} alt='img' />
				</div>
				<div className={styles.text}>
					<h1>{label}</h1>
					<p>{text}</p>
				</div>
			</div>
		</>
	)
}

export default SolutionsCard
