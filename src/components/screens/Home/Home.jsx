import HeadingBottom from '../../layout/heading/heading_bottom/HeadingBottom'
import HeadingTop from '../../layout/heading/heading_top/HeadingTop'
import ButtonLight from '../../ui/button/button_light/ButtonLight'
import styles from './Home.module.scss'
import Solutions from './solutions/Solutions'



function App() {
	return (
		<>
			<HeadingTop />
			<header className={styles.wrapper}>
				<HeadingBottom />
				<div className='container'>
					<div className={styles.content}>
						<p className={styles.label}>Logistics & Supply Chain Solutions</p>
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

			<section className={styles.solution}>
				<div className='container'>
					<Solutions />
				</div>
			</section>
		</>
	)
}

export default App
