import HeadingBottom from '../../layout/heading/heading_bottom/HeadingBottom'
import HeadingTop from '../../layout/heading/heading_top/HeadingTop'
import Tags from '../../ui/tags/Tags'
import TeamHome from '../Home/team/TeamHome'
import styles from './Team.module.scss'

const Team = () => {
	const yourProfessional = [
		'Warehouse Head',
		'Transport Manager',
		'Cargo Head',
		'Operational Head',
		'Country Head',
		'Finance Manager'
	]
	return (
		<>
			<HeadingTop />
			<section className={styles.wrapper}>
				<HeadingBottom />
				<div className='container'>
					<div className={styles.content}>
						<div className={styles.teg}>
							<Tags customStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
								Team
							</Tags>
						</div>

						<div className={styles.title}>Our Team</div>
					</div>
				</div>
			</section>

			<section className={styles.teamWrapper}>
				<TeamHome visibleCount={6}>{yourProfessional}</TeamHome>
			</section>
			
			
		</>
	)
}

export default Team
