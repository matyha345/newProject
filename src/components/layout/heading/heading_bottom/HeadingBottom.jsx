import { Link } from 'react-router-dom'
import Facebook from '../../../ui/icons/icons_white/facebook/Facebook'
import Instagram from '../../../ui/icons/icons_white/instagram/Instagram'
import Linkedin from '../../../ui/icons/icons_white/linkedin/Linkedin'
import Twitter from '../../../ui/icons/icons_white/twitter/Twitter'
import styles from './HeadingBottom.module.scss'
import Hamburger from './hamburger/Hamburger'

const HeadingBottom = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className='container'>
					<div className={styles.bottom}>
						<ul className={styles.link}>
							<li>
								<div className={styles.inner}>
									<Link to={'/'}>Home</Link>
								</div>
								<span></span>
							</li>
							<li>
								<div className={styles.inner}>
									<Link to={'/about-us'}>About</Link>
								</div>
								<span></span>
							</li>
							<li>
								<div className={styles.inner}>
									<Hamburger />
								</div>
								<span></span>
							</li>
							<li>
								<div className={styles.inner}>
									<Link to={'/project'}>Project</Link>
								</div>
								<span></span>
							</li>
							<li>
								<div className={styles.inner}>
									<Link to={'/contact'}>Contact</Link>
								</div>
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
