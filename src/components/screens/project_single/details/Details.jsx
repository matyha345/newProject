import styles from './Details.module.scss'
import DetailsTexts from './details_texts/DetailsTexts'
import imgTrack from './image/Image.jpg'

const Details = () => {
	const title = ['Customer', 'Category', 'Date', 'Status', 'Tags']

	const innerText = [
		'David Warner',
		'Warehouse Transportaion',
		'12 December, 2022',
		'Completed',
		'Life Style Travel , Best Delivery'
	]
	return (
		<>
			<section className={styles.wrapper}>
				<div className='container'>
					<div className={styles.content}>
						<div className={styles.images}>
							<img src={imgTrack} alt='track Details' />
						</div>

						<div className={styles.texts}>
							<h1 className={styles.label}>Project Details</h1>

							<div className={styles.blok}>
								{title.map((element, index) => (
									<div className={styles.contenting} key={`__element${index}`}>
										<div className={styles.title}>{element}</div>
										<span>:</span>
										<div className={styles.inner}>{innerText[index]}</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<DetailsTexts />
		</>
	)
}

export default Details
