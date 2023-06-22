import HeadingBottom from '../../layout/heading/heading_bottom/HeadingBottom'
import HeadingTop from '../../layout/heading/heading_top/HeadingTop'
import Tags from '../../ui/tags/Tags'

import styles from './AboutUs.module.scss'
import Logistics from './logistics/Logistics'
import Overview from './overview/Overview'

const AboutUs = () => {
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
		</>
	)
}

export default AboutUs
