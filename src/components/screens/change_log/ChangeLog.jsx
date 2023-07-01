import Footer from '../../layout/footer/Footer'
import HeadingBottom from '../../layout/heading/heading_bottom/HeadingBottom'
import HeadingTop from '../../layout/heading/heading_top/HeadingTop'
import Tags from '../../ui/tags/Tags'
import styles from './ChangeLog.module.scss'

const ChangeLog = () => {
	return (
		<>
			<HeadingTop />
			<section className={styles.wrapper}>
				<HeadingBottom />
				<div className='container'>
					<div className={styles.content}>
						<div className={styles.tag}>
							<Tags customStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
								Updates
							</Tags>
						</div>
						<h1 className={styles.title}>Change Log</h1>
					</div>
				</div>
			</section>

			<section className={styles.letter}>
				<div className='container'>
					<div className={styles.contentInner}>
						<div className={styles.version}>Version 01</div>
						<p className={styles.text}>
							Initial TransitFlow Webflow Template Release
						</p>
					</div>
				</div>
			</section>

			<Footer />
		</>
	)
}

export default ChangeLog
