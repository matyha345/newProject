import HeadingEmail from '../../../layout/heading/heading_top/heading_icons/HeadingEmail'
import HeadingPhone from '../../../layout/heading/heading_top/heading_icons/HeadingPhone'
import HeadingTime from '../../../layout/heading/heading_top/heading_icons/HeadingTime'
import ButtonLight from '../../../ui/button/button_light/ButtonLight'
import ContactBottom from '../../../ui/contact_bottom/ContactBottom'
import Tags from '../../../ui/tags/Tags'
import styles from './Contact.module.scss'


const Contact = () => {

	return (
		<section className={styles.wrapper}>
			<div className='container'>
				<Tags customStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
					Contact
				</Tags>
				<div className={styles.contacts}>
					<div className={styles.contacting}>
						<h1 className={styles.label}>Get in touch with us</h1>
						<p className={styles.text}>
							Leverage agile frameworks to provide a robust synopsis for
							strategy foster collaborative thinking to further the overall
							value.
						</p>
						<div className={styles.toll}>
							<div className={styles.blok}>
								<HeadingEmail />
							</div>
							<div className={styles.blok}>
								<HeadingPhone />
							</div>
							<div className={styles.blok}>
								<HeadingTime />
							</div>
						</div>
					</div>

					<form className={styles.inputs}>
						<div className={styles.Column}>
							<input type='name' placeholder='Your name*' required />
							<input type='Email' placeholder='Email*' required />
							<input type='number' placeholder='Phone Number*' required />
							<input type='city' placeholder='City*' required />
						</div>
						<textarea
							className={styles.bigText}
							name='tex'
							placeholder='Your Message'
							maxLength='100'
						></textarea>
						<div className={styles.button}>
							<ButtonLight />
						</div>
					</form>
				</div>
				<ContactBottom />
			</div>
		</section>
	)
}

export default Contact
