import styles from './Solutions.module.scss'

import SolutionsCard from './solutions_card/SolutionsCard'
import { solutionsCart } from './solutions_card/SolutionsCart'

const Solutions = () => {
	return (
		<>
			<div className={styles.content}>
				<div className={styles.left}>
					<h2>What We Do</h2>

					<h1>Safe & Reliable Cargo Solutions</h1>
				</div>

				<div className={styles.right}>
					{solutionsCart.map((card, index) => {
						return (
							<SolutionsCard
								key={index}
								svg={card.svg}
								label={card.label}
								text={card.text}
							/>
						)
					})}
				</div>
			</div>
		</>
	)
}

export default Solutions
