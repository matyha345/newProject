import Tags from '../../../ui/tags/Tags'
import styles from './TeamHome.module.scss'

import { AiOutlineInstagram } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

const TeamHome = () => {
	const imgPaths = [
		'/images/image/person/team1.jpg',
		'/images/image/person/team2.jpg',
		'/images/image/person/team3.jpg'
	]
	const title = ['Jessca Arow', 'Kathleen Smith', 'Rebecca Tylor']

	return (
		<div className={styles.wrapper}>
			<div className='container'>
				<div className={styles.content}>
					<Tags customStyle={{ color: '#1c1f35' }}>The Transporters</Tags>
					<h1 className={styles.label}>Meet Expert Team</h1>

					<div className={styles.cards}>
						<div className={styles.card}>
							{imgPaths.map((card, index) => (
								<div className={styles.person} key={index}>
									<div className={styles.images}>
										<img src={card} alt='#' />
									</div>
									<div className={styles.names}>
										<div className={styles.name}>
											<h2>{title[index]}</h2>
											<p>Designer</p>
										</div>
										<ul className={styles.icons}>
											{index === 0 && (
												<>
													<li>
														<a href='#'>
															<AiOutlineTwitter fill='black' fontSize='23' />
														</a>
													</li>
													<li>
														<a href='#'>
															<BsFacebook fill='black' fontSize='23' />
														</a>
													</li>
													<li>
														<a href='#'>
															<AiOutlineInstagram fill='black' fontSize='23' />
														</a>
													</li>
												</>
											)}
											{index === 1 && (
												<>
													<li>
														<a href='#'>
															<AiFillLinkedin fill='black' fontSize='23' />
														</a>
													</li>
													<li>
														<a href='#'>
															<AiOutlineTwitter fill='black' fontSize='23' />
														</a>
													</li>
													<li>
														<a href='#'>
															<BsFacebook fill='black' fontSize='23' />
														</a>
													</li>
													<li>
														<a href='#'>
															<AiOutlineInstagram fill='black' fontSize='23' />
														</a>
													</li>
												</>
											)}

											{index === 2 && (
												<>
													<li>
														<a href='#'>
															<BsFacebook fill='black' fontSize='23' />
														</a>
													</li>
													<li>
														<a href='#'>
															<AiOutlineInstagram fill='black' fontSize='23' />
														</a>
													</li>
												</>
											)}
										</ul>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TeamHome
