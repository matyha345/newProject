import styles from './InformationBottom.module.scss'

const InformationBottom = () => {
	
	const number = ['24', '1294', '3594', '247+']

	const text = [
		'Our Location',
		'Delivered Packages',
		'Satisfied Clients',
		'Owned Vehicles'
	]

	return (
		<div className={styles.wrapper}>
			<div className={styles.inner}>
				{number.map((card, index) => (
					<div className={styles.content} key={`__maps_${index}`}>
						<div className={styles.number}>{card}</div>
						<span></span>
						<div className={styles.text}>{text[index]}</div>
						{index <= 2 && <div className={styles.lain}></div>}
					</div>
				))}
			</div>
		</div>
	)
}

export default InformationBottom
