import Tags from '../../../ui/tags/Tags'
import styles from './TeamHome.module.scss'

import { AiOutlineInstagram } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

const TeamHome = ({ visibleCount, children}) => {
	const imgPaths = [
		'/images/image/person/team1.jpg',
		'/images/image/person/team2.jpg',
		'/images/image/person/team3.jpg',
		'/images/image/person/team4.jpg',
		'/images/image/person/team5.jpg',
		'/images/image/person/team6.jpg'
	]
	const title = [
		'Jessca Arow',
		'Kathleen Smith',
		'Rebecca Tylor',
		'Ria Jackson',
		'Kane William',
		'Lisara Tylor'
	]

	const socialMediaIcons = [
		{
			icon: <AiOutlineTwitter fill='black' fontSize='23' />,
			condition: [0, 1, 3, 4]
		},
		{
			icon: <BsFacebook fill='black' fontSize='23' />,
			condition: [0, 1, 2, 3, 4, 5]
		},
		{
			icon: <AiOutlineInstagram fill='black' fontSize='23' />,
			condition: [0, 1, 2, 3, 4, 5]
		},
		{ icon: <AiFillLinkedin fill='black' fontSize='23' />, condition: [1] }
	]

	return (
		<div className={styles.wrapper}>
			<div className='container'>
				<div className={styles.content}>
					<Tags customStyle={{ color: '#1c1f35' }}>The Transporters</Tags>
					<h1 className={styles.label}>Meet Expert Team</h1>

					<div className={styles.cards}>
						<div className={styles.card}>
							{imgPaths.slice(0, visibleCount).map((card, index) => (
								<div className={styles.person} key={index}>
									<div className={styles.images}>
										<img src={card} alt='#' />
									</div>
									<div className={styles.names}>
										<div className={styles.name}>
											<h2>{title[index]}</h2>
											<p>{children[index]}</p>
										</div>
										<ul className={styles.icons}>
											{socialMediaIcons.map((item, index) => {
												if (item.condition.includes(index)) {
													return (
														<li key={`__i${index}`}>
															<a href='#'>{item.icon}</a>
														</li>
													)
												}
												return null
											})}
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
