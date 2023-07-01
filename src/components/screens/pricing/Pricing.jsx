import Footer from '../../layout/footer/Footer'
import HeadingBottom from '../../layout/heading/heading_bottom/HeadingBottom'
import HeadingTop from '../../layout/heading/heading_top/HeadingTop'
import Slide from '../../layout/slide/Slide'
import Tags from '../../ui/tags/Tags'
import Price from '../about_us/price/Price'
import styles from './Pricing.module.scss'

const Pricing = () => {
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
				</div>
				<div className={styles.price}>
					<Price />
				</div>

                <div className={styles.slide}>
                    <Slide />
                </div>

                <Footer />
			</section>
		</>
	)
}

export default Pricing
