import ButtonLight from '../../ui/button/button_light/ButtonLight'
import Logo from '../../ui/logo/Logo'
import HeadingEmail from '../heading/heading_top/heading_icons/HeadingEmail'
import HeadingPhone from '../heading/heading_top/heading_icons/HeadingPhone'
import styles from './Footer.module.scss'

import { BsFacebook } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import FooterTop from './footer_top/FooterTop'
import KtoTebeNygen from './kto_tebe_nygen/KtoTebeNygen'
import ButtonNormal from '../../ui/button/button_normal/ButtonNormail'
import FooterAbout from './footer_about/FooterAbout'

const Footer = () => {

	const myCustomStyle = {
		marginRight: '30px',
	  };
	return (
		<footer className={styles.wrapper}>
			<FooterTop />
			<div className='container'>
				<div className={styles.bottom}>
					<div className={styles.columnOne}>
						<p>
							Leverage agile frameworks to provide a robust synopsis for
							strategy collaborative thinking to further the overall value
							proposition.
						</p>

						<div className={styles.iconsOne}>
							<HeadingEmail />
						</div>
						<div className={styles.iconsOne}>
							<HeadingPhone />
						</div>
					</div>

					<FooterAbout />

					<div className={styles.subscribe}>
						<input type='text' placeholder='Email here*' />

						<div className={styles.iconsInner}>
							<ButtonNormal customStyle={myCustomStyle}>Send Now</ButtonNormal>

							<a href='#'>
								<AiOutlineTwitter fill='white' fontSize='23' />
							</a>

							<a href='#'>
								<AiFillLinkedin fill='white' fontSize='23' />
							</a>

							<a href='#'>
								<BsFacebook fill='white' fontSize='23' />
							</a>
						</div>
					</div>
				</div>

				<KtoTebeNygen />
			</div>
		</footer>
	)
}

export default Footer
