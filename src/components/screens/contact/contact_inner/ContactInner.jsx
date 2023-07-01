import Footer from '../../../layout/footer/Footer'
import ContactBottom from '../../../ui/contact_bottom/ContactBottom'
import Tags from '../../../ui/tags/Tags'
import Questions from '../../about_us/question/Questions'
import styles from './ContactInner.module.scss'
import FormsContact from './forms_contact/FormsContact'

import IconsContact from './icons_contact/IconsContact'


const ContactInner = () => {
	return (
		<>
			<section className={styles.wrapper}>
				<div className='container'>
					<div className={styles.wrapperInner}>
						<div className={styles.content}>
							<div className={styles.tag}>
								<Tags customStyle={{ backgroundColor: 'rgba(232, 232, 232, 0.10)' }}>Contact</Tags>
							</div>
							<div className={styles.title}>Get in touch with us </div>
							<p className={styles.text}>
								Leverage agile frameworks to provide a robust synopsis for
								strategy foster collaborative thinking to further the overall
								value.
							</p>

							<div className={styles.icons}>
								<IconsContact />
							</div>

							<div className={styles.forms}>
								<FormsContact />
							</div>
						</div>
					</div>

					<div className={styles.contact}>
						<ContactBottom />
					</div>
				</div>
			</section>
			<Questions />
			<Footer />
		</>
	)
}

export default ContactInner
