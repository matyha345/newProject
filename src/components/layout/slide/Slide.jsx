import Tags from '../../ui/tags/Tags'
import styles from './Slide.module.scss'
import SlideCard from './slidecard/SlideCard'


const Slide = () => {
	return (
		<section className={styles.wrapper}>
			<div className='container'>
				<Tags customStyle={{ color: '#1C1F35' }}>Testimonial</Tags>
				<div className={styles.title}>What Our Customer Say</div>

				<SlideCard />
			</div>
		</section>
	)
}

export default Slide
