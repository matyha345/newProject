
import Tags from '../../ui/tags/Tags'
import styles from './Slide.module.scss'
import img1 from './slidecard/images/image/photo1.jpg'
import img2 from './slidecard/images/image/photo2.jpg'
import svg from './slidecard/images/svg/quotes.svg'

import { RiStarSFill } from 'react-icons/Ri'

const Slide = () => {
	return (
		<section className={styles.wrapper}>
			<div className='container'>
				<Tags customStyle={{color: '#1C1F35'}}>Testimonial</Tags>
				<div className={styles.title}>What Our Customer Say</div>

				<div className={styles.sliding}>
					<div className={styles.left}>
						<div className={styles.top}>
							<div className={styles.avatar}>
								<div className={styles.images}>
									<img src={img1} alt='#' />
								</div>

								<div className={styles.text}>
									<h1>Kathleen Smith</h1>
									<p>Fuel Company</p>
								</div>
							</div>

							<div className={styles.svg}>
								<img src={svg} alt='#' />
							</div>
						</div>

						<div className={styles.bottom}>
							<div className={styles.text}>
								<p>
									Leverage agile frameworks to provide a robust synopsis for
									strategy foster collaborative thinking to further the overall
									value proposition. Organically grow the holistic world view of
									disruptive innovation via workplace diversity and empowerment.
								</p>
								<div className={styles.rating}>
									<RiStarSFill />
								</div>
							</div>
						</div>
					</div>
					<div className={styles.right}>
						<div className={styles.top}>
							<div className={styles.avatar}>
								<div className={styles.images}>
									<img src={img2} alt='#' />
								</div>

								<div className={styles.text}>
									<h1>Kathleen Smith</h1>
									<p>Fuel Company</p>
								</div>
							</div>
							<div className={styles.svg}>
								<img src={svg} alt='#' />
							</div>
						</div>
						<div className={styles.bottom}>
							<div className={styles.text}>
								<p>
									Leverage agile frameworks to provide a robust synopsis for
									strategy foster collaborative thinking to further the overall
									value proposition. Organically grow the holistic world view of
									disruptive innovation via workplace diversity and empowerment.
								</p>
								<div className={styles.rating}>
									<RiStarSFill />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Slide
