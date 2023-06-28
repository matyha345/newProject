import styles from './Benefit.module.scss'
import { HiArrowNarrowRight } from 'react-icons/hi'
import imageT from './Trak.jpg'
import BenefitVideo from './benefit_video/BenefitVideo'

const Benefit = () => {
	const textInner = [
		'Clearance and compliance service',
		'Saving Time to Deal with commodo iaculis',
		'Automate your business elis tristique',
		'Saving Time to Deal with commodo iaculis'
	]

	return (
		<>
			<section className={styles.wrapper}>
				<div className='container'>
					<div className={styles.content}>
						<div className={styles.left}>
							<h1 className={styles.title}>Benefit of Service</h1>
							<p className={styles.text}>
								Sed ut perspiciatis, unde omnis iste natu volupta temaccu
								santium doloremque laudantium, totam rem quae ab illo inventore
								veritatis.
							</p>

							<div className={styles.opportunities}>
								<div className={styles.inner}>
									{textInner.map((text, index) => (
										<div
											className={styles.innerText}
											key={`__mapBenefit${index}`}
										>
											<HiArrowNarrowRight color='black' fontSize={22} />
											<p>{text}</p>
										</div>
									))}
								</div>
							</div>
						</div>

						<div className={styles.right}>
							<img src={imageT} alt='imageBenefit' />
						</div>
					</div>
				</div>
			</section>

            <BenefitVideo />
		</>
	)
}

export default Benefit
