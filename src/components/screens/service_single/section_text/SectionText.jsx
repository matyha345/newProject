import styles from './SectionText.module.scss'

import image from './shep_single.jpg'
import svgImage from './Icon.svg'
import Benefit from '../benefit/Benefit'

const SectionText = () => {
	return (
		<>
			<section className={styles.wrapper}>
				<div className='container'>
					<img src={image} alt='imgSection' />
					<div className={styles.title}>
						<img src={svgImage} alt='svgSection' />
						<h1 className={styles.inner}>Sea Transport Services</h1>
					</div>

					<p className={styles.texts}>
						Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
						sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
						dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
						quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur,
						adipisci velit, sed quia non numquam eius modi tempora incidunt, ut
						labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
						minima veniam, quis nostrum exercitationem ullam corporis suscipit
						laboriosam, nisi ut aliquid ex ea commodi consequatur?
					</p>
					<p className={styles.text}>
						Quis autem vel eum iure reprehenderit, qui in ea voluptate velit
						esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum
						fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et
						iusto odio dignissimos ducimus, qui blanditiis praesentium
						voluptatum deleniti atque corrupti, quos dolores et quas molestias
						excepturi sint, obcaecati cupiditate non provident, similique sunt
						in culpa, qui officia deserunt mollitia animi, id est laborum et
						dolorum fuga. Et harum quidem rerum facilis est et expedita
						distinctio.
					</p>
				</div>
			</section>

			<Benefit />
		</>
	)
}

export default SectionText
