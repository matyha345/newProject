import Footer from '../../layout/footer/Footer'
import HeadingBottom from '../../layout/heading/heading_bottom/HeadingBottom'
import HeadingTop from '../../layout/heading/heading_top/HeadingTop'
import Tags from '../../ui/tags/Tags'
import styles from './ProjectSingle.module.scss'
import Details from './details/Details'

const ProjectSingle = () => {
	return (
		<>
			<HeadingTop />

			<section className={styles.wrapper}>
				<HeadingBottom />

				<div className='container'>
					<div className={styles.content}>
						<div className={styles.tag}>
							<Tags customStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
								Warehouse Transportation
							</Tags>
						</div>

						<h1 className={styles.title}>Air Cargo Transportation</h1>
					</div>
				</div>
			</section>

            <Details />
			<Footer />
		</>
	)
}

export default ProjectSingle
