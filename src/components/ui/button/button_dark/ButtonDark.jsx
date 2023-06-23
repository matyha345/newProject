import styles from './ButtonDark.module.scss'

const ButtonDark = ({children}) => {
	return (
		<>
			<button className={styles.btn}>
				<span>{children}</span>
			</button>
		</>
	)
}

export default ButtonDark
