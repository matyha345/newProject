import Footer from '../../layout/footer/Footer'
import Goodness from '../../layout/goodnes/Goodness'
import HeadingBottom from '../../layout/heading/heading_bottom/HeadingBottom'
import HeadingTop from '../../layout/heading/heading_top/HeadingTop'
import InformationBottom from '../../layout/information/InformationBottom'
import Slide from '../../layout/slide/Slide'
import ButtonDark from '../../ui/button/button_dark/ButtonDark'
import Tags from '../../ui/tags/Tags'
import Logistics from '../about_us/logistics/Logistics'
import styles from './Service.module.scss'

const Service = () => {
	return (
		<>
			<HeadingTop />
			<section className={styles.wrapper}>
				<HeadingBottom />
				<div className='container'>
					<div className={styles.content}>
						<div>
							<Tags customStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>Services</Tags>
						</div>

						<h1 className={styles.title}>Our Logistics Service</h1>
					</div>
				</div>
			</section>

			<Logistics>
				<div className={styles.buttonInner}>
					<ButtonDark>More Works</ButtonDark>
				</div>
			</Logistics>

			<Goodness bigImag={'/images/image/goodness.jpg'} />

			<Slide />

			<InformationBottom />


			<Footer />
		</>
	)
}

export default Service
