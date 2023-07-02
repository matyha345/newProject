import Tags from '../../../ui/tags/Tags'
import styles from './Logistics.module.scss'
import LogisticsCard from './logistics_cards/LogisticsCard'
import { logisticsProduct } from './logistics_cards/LogisticsCards'


const Logistics = ({children}) => {
	return (
		<section className={styles.wrapper}>
			<div className='container'>
				<div className={styles.content}>
					<Tags>What We Do</Tags>

					<h1 className={styles.title}>Our Logistics Services</h1>

					<div className={styles.services}>
						{logisticsProduct.map((scr, logistic) => {
							return (
								<LogisticsCard
									key={logistic}
									svg={scr.svg}
									title={scr.title}
									text={scr.text}
								/>
							)
						})}
					</div>
				</div>
				{children}
			</div>
		</section>
	)
}

export default Logistics
