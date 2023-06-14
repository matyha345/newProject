import styles from './LogisticsRight.module.scss'
import photoImg from '../image/photoMin.jpg'
import photoBiImg from '../image/airplane.jpg'

const LogisticsRight = () => {
	return (
		<>
			<div className={styles.right}>
					<img  src={photoBiImg} alt='Why Us' />
				<div className={styles.minImg}>
					<img src={photoImg} alt='Why Us' />
				</div>
			</div>
		</>
	)
}

export default LogisticsRight
