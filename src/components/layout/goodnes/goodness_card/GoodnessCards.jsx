import styles from '../Goodness.module.scss'
import { goodnessCard } from './goodnessCard'

const GoodnessCards = ({ svg, title, text }) => {
	return (
		<>
			
				<div className={styles.rightInner}>
					<div className={styles.svgRight}>
						<img src={svg} alt='svg' />
					</div>

					<div className={styles.texts}>
						<h1 className={styles.title}>{title}</h1>
						<p className={styles.text}>{text}</p>
					</div>
				</div>
			
		</>
	)
}

export default GoodnessCards
