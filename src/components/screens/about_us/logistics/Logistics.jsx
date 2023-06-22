import Tags from '../../../ui/tags/Tags'
import styles from './Logistics.module.scss'
import svgOneAbout from './logistics_cards/svg/ship.svg'

const Logistics = () => {
	return (
		<section className={styles.wrapper}>
			<div className='container'>
				<div className={styles.content}>
					<Tags>What We Do</Tags>

					<h1 className={styles.title}>Our Logistics Services</h1>

					<div className={styles.services}>
						<div className={styles.card}>
							<div className={styles.top}>
								<img src={svgOneAbout} alt='#' />
							</div>
							<div className={styles.bottom}>
								<h1>Sea Transport Services</h1>
								<p>
									Following the quality of our service thus having gained trust
									of our many clients.
								</p>
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.top}>
								<img src={svgOneAbout} alt='#' />
							</div>
							<div className={styles.bottom}>
								<h1>Sea Transport Services</h1>
								<p>
									Following the quality of our service thus having gained trust
									of our many clients.
								</p>
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.top}>
								<img src={svgOneAbout} alt='#' />
							</div>
							<div className={styles.bottom}>
								<h1>Sea Transport Services</h1>
								<p>
									Following the quality of our service thus having gained trust
									of our many clients.
								</p>
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.top}>
								<img src={svgOneAbout} alt='#' />
							</div>
							<div className={styles.bottom}>
								<h1>Sea Transport Services</h1>
								<p>
									Following the quality of our service thus having gained trust
									of our many clients.
								</p>
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.top}>
								<img src={svgOneAbout} alt='#' />
							</div>
							<div className={styles.bottom}>
								<h1>Sea Transport Services</h1>
								<p>
									Following the quality of our service thus having gained trust
									of our many clients.
								</p>
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.top}>
								<img src={svgOneAbout} alt='#' />
							</div>
							<div className={styles.bottom}>
								<h1>Sea Transport Services</h1>
								<p>
									Following the quality of our service thus having gained trust
									of our many clients.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Logistics
