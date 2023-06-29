import styles from './OurLatestNews.module.scss'

import imgBlog from '/images/image/blog.jpg'
import imgBlog1 from '/images/image/blog1.jpg'
import imgBlog2 from '/images/image/blog2.jpg'
import imgBlog3 from '/images/image/blog3.jpg'
import imgBlog4 from '/images/image/blog4.jpg'

const OurLatestNews = ({ visibleCount }) => {
	const cardBlog = [
		{
			img: imgBlog,
			title: 'Inland freight a worthy solution for your business',
			data: '08'
		},
		{
			img: imgBlog1,
			title: 'How technology can help redraw the supply chain map',
			data: '12'
		},
		{
			img: imgBlog2,
			title: 'Five things you should have ready for your broker',
			data: '25'
		},
		{
			img: imgBlog3,
			title: 'Four simple tips for becoming a healthier truck driver',
			data: '28'
		},
		{
			img: imgBlog4,
			title: 'What Is The Role Of A Logistics Operations Manager',
			data: '30'
		}
	]

	return (
		<>
			<section className={styles.contents}>
				{cardBlog.slice(0, visibleCount).map((path, index) => (
					<div key={index} className={styles.content}>
						<div className={styles.images}>
							<img src={path.img} alt='#' />
						</div>

						<div className={styles.miting}>
							<div className={styles.data}>
								<span>{path.data}</span> <br /> September
							</div>
							<div className={styles.lain}></div>
							<div className={styles.time}>
								{index === 1 ? (
									<h2 className={styles.title__colors}>{path.title}</h2>
								) : (
									<h2 className={styles.title}>{path.title}</h2>
								)}

								<p className={styles.text}>
									We are dedicated in creating added value for our customers by
									implementing modern technology in our work.
								</p>

								<li>Urgent transport solutions</li>
								<li>Reliable & experienced staffs</li>
								<li>Urgent transport solutions</li>
								<li>Reliable & experienced staffs</li>
							</div>
						</div>
					</div>
				))}
			</section>
		</>
	)
}

export default OurLatestNews
