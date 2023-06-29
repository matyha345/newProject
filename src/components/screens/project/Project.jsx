import Footer from '../../layout/footer/Footer'
import HeadingBottom from '../../layout/heading/heading_bottom/HeadingBottom'
import HeadingTop from '../../layout/heading/heading_top/HeadingTop'
import InformationBottom from '../../layout/information/InformationBottom'
import Tags from '../../ui/tags/Tags'
import styles from './Project.module.scss'

import img1 from './image/Photo.jpg'
import img2 from './image/Photo2.jpg'
import img3 from './image/Photo3.jpg'
import img4 from './image/Photo4.jpg'
import img5 from './image/Photo5.jpg'
import img6 from './image/Photo6.jpg'

const Project = () => {
	const cardImage = [img1, img2, img3, img4, img5, img6]

	return (
		<>
			<HeadingTop />
			<section className={styles.wrapper}>
				<HeadingBottom />

				<div className='container'>
					<div className={styles.content}>
						<div className={styles.tag}>
							<Tags customStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
								Gallery
							</Tags>
						</div>
						<h1 className={styles.title}>Our Project</h1>
					</div>
				</div>
			</section>
			<section className={styles.images}>
				<div className='container'>
					<div className={styles.boxImage}>
						{cardImage.map((path, index) => (
							<div className={styles.image} key={`__path${index}`}>
								<img src={path} alt='project images' />
							</div>
						))}
					</div>
				</div>
			</section>

			<InformationBottom />

            <Footer />
		</>
	)
}

export default Project
