import Tags from '../../../ui/tags/Tags'
import styles from './AirTransport.module.scss'
import imagesFlight from './flight.jpg'

const AirTransport = () => {

	const svgPaths = [
		'/images/svg/air/box.svg',
		'/images/svg/air/clock.svg',
		'/images/svg/air/headphones.svg',
		'/images/svg/air/icon.svg',
		'/images/svg/air/ship.svg',
		'/images/svg/air/wheel.svg'
	]

	const title = [
		'Safe Package',
		'Global Tracking',
		'In Time Delivery',
		'Ship Everyware',
		'24/7 Support',
		'Transparant Pricing'
	]

	return (
		<>
			<section className={styles.wrapper}>

				<div className={styles.container}>
					<div className={styles.bgLeft}>
						<div className={styles.images}>
							<div className={styles.image}>
								<img className={styles.gofno} src={imagesFlight} alt='#' />
								<div className={styles.bgSvg}>
									<img src='/images/svg/air/big_svg.svg' alt='#' />
									<h1>Moving your products across borders</h1>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.bgRight}>
						<div className={styles.svg}></div>
						<div className={styles.content}>
							<Tags>Why Choose</Tags>
							<h1 className={styles.label}>
								We create opportunity to reach potential
							</h1>
							<p className={styles.text}>
								Leverage agile frameworks to provide a robust synopsis for
								strategy foster collaborative thinking to further the overall
								value proposition.{' '}
							</p>

							<div className={styles.bottom}>
								{svgPaths.map((path, index) => (
									<div className={styles.svg} key={index}>
										<div className={styles.images}>
											<img src={path} alt='#' />
										</div>
										<h1>{title[index]}</h1>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default AirTransport
