import SingleVideo from '../../single_video/SingleVideo'
import styles from './DetailsText.module.scss'
import { HiArrowNarrowRight } from 'react-icons/hi'

const DetailsTexts = () => {
	const innerText = [
		'National Customer Service Center – 24 hours a day.',
		'Online shipping navigator lets you quote, book, and track shipments',
		'Your Logistics Needs Are At The Heart Of Our Business',
		'Very careful handling of valuable goods',
		'Time saving and convenient transportation services in your area'
	]

	return (
		<>
			<section className={styles.wrapper}>
				<div className='container'>
					<div className={styles.content}>
						<h1 className={styles.title}>Wharehouse Transportation</h1>
						<p className={styles.text}>
							Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
							Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec
							feugiat tempus.Phasellus at quam id elit hendrerit semper feugiat
							id nunc. Morbi quis justo velit. Duis semper lacus scelerisque,
							aliquam leo quis, porttitor leo. Fusce lectus ex, pretium
							efficitur suscipit sed, faucibus vel elit Integer adipiscing erat
							eget risus sollicitudin pellentesque non erat. Maecenas nibh dolor
							malesuada sagittis accumsan ipsum. Pellentesque ultrices ultrices
							sapien, nec tincidunt nunc posuere.
						</p>

						<div className={styles.bottom}>
							{innerText.map((title, index) => (
								<div className={styles.inner} key={`__inner${index}`}>
									<HiArrowNarrowRight color='black' fontSize={22} />
									<p>{title}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

            <SingleVideo /> 
		</>
	)
}

export default DetailsTexts
