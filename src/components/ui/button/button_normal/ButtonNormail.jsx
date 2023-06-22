import styles from './ButtonNormail.module.scss'

const ButtonNormal = ({children, customStyle}) => {
	return (
		<>
			<button style={customStyle}  className={styles.btn}>{children}</button>
		</>
	)
}

export default ButtonNormal
