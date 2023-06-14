import styles from './logistics.module.scss'
import svgDelivery from './svg/delivery.svg'
import svgOptimized from './svg/optimized.svg'
import LogisticsRight from './logistics_right/LogisticsRight'
import LogisticsBottom from './bottom/LogisticsBottom'
import Transporting from '../transporting/Transporting'
import Tags from '../../../ui/tags/Tags'

const Logistics = () => {
	return (
		<section className={styles.logistics}>
			<div className='container'>
				<div className={styles.contents}>
					<div className={styles.content}>
						<div className={styles.left}>
							<Tags>Why Us</Tags>
							<h1 className={styles.label}>
								We provide full range global logistics solution
							</h1>

							<p className={styles.text}>
								Leverage agile frameworks to provide a robust synopsis for
								strategy foster collaborative thinking to further the overall
								value proposition. Organically grow the holistic world view of
								disruptive innovation via workplace diversity and empowerment.
							</p>

							<div className={styles.icons}>
								<div className={styles.svg}>
									<div className={styles.image}>
										<img src={svgDelivery} alt='delivery' />
									</div>
									<p>Delivery on Time</p>
								</div>
								<div className={styles.svg}>
									<div className={styles.image}>
										<img src={svgOptimized} alt='Optimized' />
									</div>
									<p>Optimized Travel Cost</p>
								</div>
							</div>
						</div>
						<LogisticsRight />
					</div>
					<LogisticsBottom />
				</div>
			</div>
		</section>
	)
}

export default Logistics
