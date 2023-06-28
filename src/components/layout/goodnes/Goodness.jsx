import Tags from '../../ui/tags/Tags'
import styles from './Goodness.module.scss'
import GoodnessCards from './goodness_card/GoodnessCards'
import { goodnessCard } from './goodness_card/goodnessCard'

const Goodness = ({ bigImag }) => {
	return (
		<section className={styles.wrapper}>
			<div className='container'>
				<div className={styles.content}>
					<div className={styles.tag}>
						<Tags>Our Goodness</Tags>
					</div>

					<h1 className={styles.label}>How We Works</h1>

					<div className={styles.bottom}>
						<div className={styles.left}>
							<img src={bigImag} alt='images' />
						</div>
						<div className={styles.right}>
							{goodnessCard.map((element, index) => {
								return (
									<GoodnessCards
										key={`__map${index}`}
										svg={element.svg}
										title={element.title}
										text={element.text}
									/>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Goodness
