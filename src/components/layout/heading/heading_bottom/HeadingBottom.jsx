import Facebook from '../../../ui/icons/icons_white/facebook/facebook'
import Instagram from '../../../ui/icons/icons_white/instagram/instagram'
import Linkedin from '../../../ui/icons/icons_white/linkedin/Linkedin'
import Twitter from '../../../ui/icons/icons_white/twitter/Twitter'
import styles from './HeadingBottom.module.scss'

const HeadingBottom = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className='container'>
					<div className={styles.bottom}>
						<ul className={styles.link}>
							<li>
								<a href='#'>Home</a>
								<span></span>
							</li>
							<li>
								<a href='#'>About</a>
								<span></span>
							</li>
							<li>
								<a href='#'>Pages</a>
								<span></span>
							</li>
							<li>
								<a href='#'>Project</a>
								<span></span>
							</li>
							<li>
								<a href='#'>Contact</a>
								<span></span>
							</li>
						</ul>

						<div className={styles.icons}>
							<li>
								<Instagram />
							</li>
							<li>
								<Facebook />
							</li>
							<li>
								<Twitter />
							</li>
							<li>
								<Linkedin />
							</li>

							<div className={styles.request}>
								<button>Request Quote</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default HeadingBottom
