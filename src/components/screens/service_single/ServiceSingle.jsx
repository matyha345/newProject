import Footer from '../../layout/footer/Footer'
import HeadingBottom from '../../layout/heading/heading_bottom/HeadingBottom'
import HeadingTop from '../../layout/heading/heading_top/HeadingTop'
import Tags from '../../ui/tags/Tags'
import styles from './ServiceSingle.module.scss'
import SectionText from './section_text/SectionText'

const ServiceSingle = () => {
	return (
		<>
			<HeadingTop />
			<section className={styles.wrapper}>
				<HeadingBottom />
				<div className='container'>
					<div className={styles.content}>
						<div>
							<Tags customStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
								Service Single
							</Tags>
						</div>

						<h1 className={styles.title}>Service Details</h1>
					</div>
				</div>
			</section>

            <SectionText />   

			<Footer />         
		</>
	)
}

export default ServiceSingle
