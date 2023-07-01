import HeadingBottom from '../../layout/heading/heading_bottom/HeadingBottom'
import HeadingTop from '../../layout/heading/heading_top/HeadingTop'
import Tags from '../../ui/tags/Tags'
import styles from './Contact.module.scss'
import ContactInner from './contact_inner/ContactInner'

const Contact = () => {
	return (
		<>
			<HeadingTop />
			<section className={styles.wrapper}>
				<HeadingBottom />
				<div className='container'>
					<div className={styles.content}>
						<div className={styles.tag}>
							<Tags customStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
								Contact
							</Tags>
						</div>
						<h1 className={styles.title}>Contact Us</h1>
					</div>
				</div>
			</section>
			
			<ContactInner />
		</>
	)
}

export default Contact
