import Footer from '../../layout/footer/Footer'
import HeadingBottom from '../../layout/heading/heading_bottom/HeadingBottom'
import HeadingTop from '../../layout/heading/heading_top/HeadingTop'
import ButtonLight from '../../ui/button/button_light/ButtonLight'
import Tags from '../../ui/tags/Tags'
import styles from './Protection.module.scss'

const Protection = () => {
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

			<section className={styles.password}>
				<div className='container'>
					<div className={styles.contentInner}>
						<div className={styles.box}>
							<h1 className={styles.title}>Enter Password</h1>

							<div className={styles.inputs}>
								<input type='text' placeholder='Enter Your Password' />

								<div className={styles.btn}>
									<ButtonLight>Submit</ButtonLight>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	)
}

export default Protection
