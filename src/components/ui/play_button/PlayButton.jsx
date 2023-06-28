import styles from './PlayButton.module.scss'
import { BsFillPlayFill } from "react-icons/bs";


const PlayButton = () => {
	return (
		<>
			<div className={styles.box}>
				<button className={styles.btn} href='#'>
					<span>
						<BsFillPlayFill  />
					</span>
				</button>
			</div>
		</>
	)
}

export default PlayButton
