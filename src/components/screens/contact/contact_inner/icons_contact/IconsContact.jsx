import styles from './IconsContact.module.scss'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { BiTime } from 'react-icons/bi'

const IconsContact = () => {
	return (
		<>
			<div className={styles.icons}>
				<div className={styles.icon}>
					<div className={styles.iconSvg}>
						<AiOutlineMail fontSize={30} />
					</div>
					<a href='mailto:Contact@logistics.com'>Contact@logistics.com</a>
				</div>
				<div className={styles.icon}>
					<div className={styles.iconSvg}>
						<BsTelephone fontSize={30} />
					</div>
					<a href='tel: (00) 112 365 489'>(00) 112 365 489</a>
				</div>
				<div className={styles.icon}>
					<div className={styles.iconSvg}>
						<BiTime fontSize={30} />
					</div>
					<div>Mon - Sat 9.00 - 18.00 <br /> Sunday Closed</div>
				</div>
			</div>
		</>
	)
}

export default IconsContact
