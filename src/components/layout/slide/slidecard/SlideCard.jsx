import 'swiper/css/virtual'
import { Virtual } from 'swiper'
import { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/swiper-bundle.css'
import 'swiper/css/a11y'

import styles from './SlideCard.module.scss'

import svg from './images/svg/quotes.svg'
import { RiStarSFill } from 'react-icons/Ri'
import { setCardSlideOne } from './slide_card.js'

import { FiArrowRight } from 'react-icons/fi'
import { FiArrowLeft } from 'react-icons/fi'

const SlideCard = () => {
	return (
		<>
			<section className={styles.wrapper}>
				<Swiper
					spaceBetween={50}
					slidesPerView={1}
					grabCursor={true}
					loop={true}
					navigation={{
						nextEl: '.next',
						prevEl: '.prev',
						clickable: true
					}}
					modules={[Navigation, Pagination, A11y, Virtual]}
					keyboard
				>
					{setCardSlideOne.map((path, index) => (
						<SwiperSlide key={`__swiper${index}`} virtualIndex={index}>
							<div className={styles.sliding}>
								<div className={styles.left}>
									<div className={styles.top}>
										<div className={styles.avatar}>
											<div className={styles.images}>
												<img src={path.img} alt='#' />
											</div>

											<div className={styles.text}>
												<h1>{path.name}</h1>
												<p>{path.сompany}</p>
											</div>
										</div>

										<div className={styles.svg}>
											<img src={svg} alt='#' />
										</div>
									</div>

									<div className={styles.bottom}>
										<div className={styles.text}>
											<p>{path.text}</p>
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
												<img src={path.imgTwo} alt='#' />
											</div>

											<div className={styles.text}>
												<h1>{path.nameTwo}</h1>
												<p>{path.сompanyTwo}</p>
											</div>
										</div>
										<div className={styles.svg}>
											<img src={svg} alt='#' />
										</div>
									</div>
									<div className={styles.bottom}>
										<div className={styles.text}>
											<p>{path.textTwo}</p>
											<div className={styles.rating}>
												<RiStarSFill />
											</div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className={styles.controler}>
					<div className={`${styles.next} next`}>
						<FiArrowLeft fontSize={20} color='black' />
					</div>
					<div className={`${styles.prev} prev`}>
						<FiArrowRight fontSize={20}  />
					</div>
				</div>
			</section>
		</>
	)
}

export default SlideCard
