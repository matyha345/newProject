import ButtonDark from '../../../ui/button/button_dark/ButtonDark'
import Tags from '../../../ui/tags/Tags'
import styles from './Overview.module.scss'

const Overview = () => {
	const button = ['Our Approch', 'Our Approch', 'Our Approch']

	return (
		<section className={styles.wrapper}>
			<div className='container'>
				<div className={styles.content}>
					<div className={styles.images}>
						<img
							styles={{ width: '600' }}
							className={styles.imgOne}
							src='/images/image/about/overviewBig.jpg'
							alt='#'
						/>

						<div className={styles.imgMini}>
							<img
								className={styles.imgTwo}
								src='/images/image/about/overview_grop.jpg'
								alt='#'
							/>
						</div>
					</div>

					<div className={styles.research}>
						<div className={styles.label}>
							<Tags>About Us</Tags>
							<h1 className={styles.title}>Our Company Overview</h1>
							<p className={styles.text}>
								Leverage agile frameworks to provide a robust synopsis for
								strategy foster collaborative thinking to further the overall
								value proposition.
							</p>
						</div>
						<div className={styles.buttons}>
							{button.map((cards, col) => (
								<button key={col} className={styles.btn}>
									{cards}
								</button>
							))}
						</div>

						<div className={styles.texts}>
							Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt, explicabo. Nemo enim ipsam voluptatem quia
							voluptassit.
						</div>
						<div className={styles.bottom}>
							<ButtonDark />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Overview
