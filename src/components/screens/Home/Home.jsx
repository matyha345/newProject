import HeadingBottom from '../../layout/heading/heading_bottom/HeadingBottom'
import HeadingTop from '../../layout/heading/heading_top/HeadingTop'
import ButtonLight from '../../ui/button/button_light/ButtonLight'

import Tags from '../../ui/tags/Tags'
import styles from './Home.module.scss'
import Logistics from './logistics/logistics'
import Solutions from './solutions/Solutions'
import Transporting from './transporting/Transporting'
import AirTransport from './air_transport/airTransport'
import TeamHome from './team/TeamHome'
import Contact from './contact/Contact'
import Blog from './blog/Blog'
import Footer from '../../layout/footer/Footer'
import Slide from '../../layout/slide/Slide'
import OurLatestNews from '../../ui/blog_card/OurLatestNews'
import ButtonDark from '../../ui/button/button_dark/ButtonDark'

function Home() {
	const yourArray = ['Designer']
	return (
		<>
			<HeadingTop />
			<header className={styles.wrapper}>
				<HeadingBottom />
				<div className='container'>
					<div className={styles.content}>
						<Tags customStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
							Logistics & Supply Chain Solutions
						</Tags>
						<h1 className={styles.title}>
							Your Gateway to any Destination in the World
						</h1>
						<p className={styles.text}>
							In augue ligula, feugiat ut nulla consequat. Ut est lacus,
							molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl
							id dapibus finibus, enim diam interdum nulla, sed laoreet risus
							lectus.
						</p>
					</div>
					<ButtonLight>Explore More</ButtonLight>
				</div>
			</header>

			<Solutions />
			<Logistics />
			<Transporting />
			<Slide />
			<AirTransport />
			<TeamHome visibleCount={3}>{yourArray}</TeamHome>
			<Contact />
			<Blog
				children={<OurLatestNews visibleCount={3} />}
				buttonBottom={<ButtonDark>More Work</ButtonDark>}
			/>
			<Footer />
		</>
	)
}

export default Home
