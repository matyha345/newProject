import Footer from '../../layout/footer/Footer'
import HeadingBottom from '../../layout/heading/heading_bottom/HeadingBottom'
import HeadingTop from '../../layout/heading/heading_top/HeadingTop'
import Slide from '../../layout/slide/Slide'
import ContactBottom from '../../ui/contact_bottom/ContactBottom'

import Tags from '../../ui/tags/Tags'
import TeamHome from '../Home/team/TeamHome'

import styles from './AboutUs.module.scss'
import Logistics from './logistics/Logistics'
import Overview from './overview/Overview'
import Price from './price/Price'
import Questions from './question/Questions'

const AboutUs = () => {
	const designer = [
		'Designer',
		'Designer',
		'Designer',
	]
	return (
		<>
			<HeadingTop />
			<header className={styles.wrapper}>
				<HeadingBottom />

				<div className='container'>
					<div className={styles.content}>
						<div className={styles.tag}>
							<Tags customStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
								About Us
							</Tags>
						</div>
						<h1 className={styles.title}>About Our Logistics</h1>
					</div>
				</div>
			</header>

			<Overview />
			<Logistics />

			<section className={styles.team}>
				<TeamHome visibleCount={3} children={designer} />
			</section>

			<Slide />
			<Price />
			<Questions />
			<section className={styles.contact}>
				<ContactBottom />
			</section>
			<Footer />
		</>
	)
}

export default AboutUs
