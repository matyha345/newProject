import Logo from '../../../ui/logo/Logo'
import styles from './FooterTop.module.scss'

const FooterTop = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className='container'>
					<div className={styles.top}>
						<div className={styles.logo}>
							<Logo />
						</div>

						<ul>
							<li>
								<a >Pages</a>
							</li>
							<li>
								<a >Utility</a>
							</li>
							<li>
								<a >Subscribe</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default FooterTop
