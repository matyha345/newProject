import ButtonDark from '../../../../ui/button/button_dark/ButtonDark'
import ButtonLight from '../../../../ui/button/button_light/ButtonLight'
import styles from './PriceCard.module.scss'



const PriceCard = ({title, number, textP, textOne, textTwo, textThree ,buttonType}) => {
	return (
		<>
			<div className={styles.blok}>
				<div className={styles.inner}>
					<h1 className={styles.title}>{title}</h1>
					<div className={styles.number}>
						<span>{number}</span> / month
					</div>
					<p className={styles.top}>{textP}</p>
					<p>{textOne}</p>
					<p>{textTwo}</p>
					<p>{textThree}</p>
				</div>

				<div className={styles.btn}>
                {buttonType === 'light' ? <ButtonLight>Choose Plan</ButtonLight> : <ButtonDark>More Works</ButtonDark>}
					{/* <ButtonDark>More Works</ButtonDark>
                    <ButtonLight /> */}
				</div>
			</div>
		</>
	)
}

export default PriceCard
