import Logo from '../../../ui/logo/Logo'
import styles from './headingTop.module.scss'
import HeadingEmail from './heading_icons/HeadingEmail'
import HeadingPhone from './heading_icons/HeadingPhone'
import HeadingTime from './heading_icons/HeadingTime'

const HeadingTop = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className='container'>
					<div className={styles.top}>
						<Logo />

						<div className={styles.time}>
							<HeadingTime />
							<HeadingEmail />
							<HeadingPhone />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default HeadingTop
