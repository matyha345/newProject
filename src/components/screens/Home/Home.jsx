import { Children } from 'react'
import HeadingBottom from '../../layout/heading/heading_bottom/HeadingBottom'
import HeadingTop from '../../layout/heading/heading_top/HeadingTop'
import ButtonLight from '../../ui/button/button_light/ButtonLight'
import Slide from '../../ui/slide/Slide'
import Tags from '../../ui/tags/Tags'
import styles from './Home.module.scss'
import Logistics from './logistics/logistics'
import Solutions from './solutions/Solutions'
import Transporting from './transporting/Transporting'

function Home() {
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
					<ButtonLight />
				</div>
			</header>

			<Solutions />
			<Logistics />
			<Transporting />
			<Slide />
		</>
	)
}

export default Home
