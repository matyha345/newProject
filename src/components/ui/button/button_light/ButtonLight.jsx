import styles from './ButtonLight.module.scss'

const ButtonLight = ({children}) => {
	return (
		<>
			<button className={styles.btn}>
				<span>{children}</span>
			</button>
		</>
	)
}

export default ButtonLight
