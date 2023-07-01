import ButtonLight from '../../../../ui/button/button_light/ButtonLight'
import styles from './FormsContact.module.scss'

const FormsContact = () => {
	return (
		<>
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
					<ButtonLight>Submit Message</ButtonLight>
				</div>
			</form>
		</>
	)
}

export default FormsContact
