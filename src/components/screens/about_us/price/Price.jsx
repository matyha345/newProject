import Tags from '../../../ui/tags/Tags'
import styles from './Price.module.scss'
import PriceCard from './price_card/PriceCard'

import { priceCards } from './price_card/PriceCards'

const Price = () => {
	return (
		<div className={styles.wrapper}>
			<div className='container'>
				<div className={styles.content}>
					<div className={styles.tag}>
						<Tags>Pricing</Tags>
					</div>

					<h1 className={styles.label}>Our Best Pricing</h1>

					<div className={styles.pricing}>
						{priceCards.map((path, tab) => {
							return (
								<PriceCard
									key={tab}
									title={path.title}
									number={path.number}
									textP={path.textP}
									textOne={path.textOne}
									textTwo={path.textTwo}
									textThree={path.textThree}
									buttonType={path.buttonType}
								/>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Price
