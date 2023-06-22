import styles from './Logo.module.scss'

const Logo = ({customStyle}) => {
	return (
		<>
			<a  style={customStyle} href='/' className={styles.logo}>
				<img src='/images/svg/logo.svg' alt='logo' />
				<p>TransitFlow</p>
			</a>
		</>
	)
}

export default Logo
