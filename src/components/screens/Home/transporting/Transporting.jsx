import ButtonDark from '../../../ui/button/button_dark/ButtonDark'
import styles from './Transporting.module.scss'
import { cardTransfer } from './cardTransfer'
import TransportingCard from './transportingCard/TransportingCard'

const Transporting = () => {
	return (
		<>
			<section className={styles.wrapper}>
				<div className={styles.container}>
					<div className={styles.content}>
						<h1 className={styles.title}>Transporting Across The World</h1>
						{cardTransfer.map((card, index) => {
							return (
								<TransportingCard
									key={index}
									img={card.img}
									title={card.title}
									text={card.text}
								/>
							)
						})}
					</div>
					<div className={styles.button}>
					</div>
						<ButtonDark> More Work </ButtonDark>
				</div>
			</section>
		</>
	)
}

export default Transporting
