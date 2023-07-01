import ContactBottom from '../../../ui/contact_bottom/ContactBottom'
import Tags from '../../../ui/tags/Tags'
import styles from './AboutTeam.module.scss'
import svgOne from './svg/Icon.svg'
import svgTwo from './svg/Icon1.svg'

const AboutTeam = () => {
	const setCard = [
		{
			svg: svgOne,
			title: 'Our Vission',
			text: 'Leverage agile frameworks to provide a robust synopsis for strategy foster.'
		},
		{
			svg: svgTwo,
			title: 'Estimate Shipping',
			text: 'Leverage agile frameworks to provide a robust synopsis for strategy foster.'
		}
	]

	return (
		<>
			<div className={styles.wrapper}>
				<div className='container'>
					<div className={styles.content}>
						<div className={styles.main}>
							<div className={styles.image}>
								<img src='/images/image/aboutMean.jpg' alt='imageMain' />
							</div>
						</div>
						<div className={styles.article}>
							<div className={styles.tag}>
								<Tags>About</Tags>
							</div>

							<div className={styles.title}>Why Choose Us</div>
							<p className={styles.text}>
								Leverage agile frameworks to provide a robust synopsis for
								strategy foster collaborative thinking to further the overall
								value proposition.
							</p>

							<span></span>

							<div className={styles.blockIcons}>
								{setCard.map((card, index) => (
									<div className={styles.our} key={`__index${index}`}>
										<div className={styles.svg}>
											<img src={card.svg} alt='svg About' />
										</div>

										<h2 className={styles.svgTitle}>{card.title}</h2>

										<p className={styles.svgText}>{card.text}</p>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className={styles.contact}>
						<ContactBottom />
					</div>
				</div>
			</div>
		</>
	)
}

export default AboutTeam
