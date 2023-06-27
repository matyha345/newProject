import { Link } from 'react-router-dom'
import Footer from '../../layout/footer/Footer'
import HeadingBottom from '../../layout/heading/heading_bottom/HeadingBottom'
import HeadingTop from '../../layout/heading/heading_top/HeadingTop'
import ButtonNormal from '../../ui/button/button_normal/ButtonNormail'
import Tags from '../../ui/tags/Tags'
import styles from './NotFound.module.scss'

const NotFound = () => {
	return (
		<>
			<HeadingTop />
			<section className={styles.wrapper}>
				<HeadingBottom />
				<div className='container'>
					<div className={styles.content}>
						<div className={styles.tag}>
							<Tags customStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
								Pricing
							</Tags>
						</div>
						<h1 className={styles.title}>Our Best Price</h1>
					</div>

                    <section className={styles.home}>
                        <div className={styles.inner}>
                            <h1 className={styles.label}>4<span>0</span>4</h1>

                            <div className={styles.bottom}>
                                <h1 className={styles.title}>Oops! Page not found.</h1>
                                <p className={styles.text}>Let’s get you to where you need to be.</p>

                                <ButtonNormal>
                                    <Link to={'/'}>Back to home</Link>
                                </ButtonNormal>
                            </div>
                        </div>
                    </section>
				</div>
                <Footer />
			</section>
		</>
	)
}

export default NotFound
