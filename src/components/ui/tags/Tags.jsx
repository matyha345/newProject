import styles from './Tags.module.scss'

const Tags = ({ children,customStyle }) => {
	return (
		<>
			<div style={customStyle} className={styles.wrapper}>{children}</div>
		</>
	)
}

export default Tags
