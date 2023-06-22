import ButtonDark from '../../../ui/button/button_dark/ButtonDark'
import Tags from '../../../ui/tags/Tags'
import styles from './Blog.module.scss'
import imgBlog from '/images/image/blog.jpg'
import imgBlog1 from '/images/image/blog1.jpg'
import imgBlog2 from '/images/image/blog2.jpg'

const Blog = () => {
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
		}
	]

	return (
		<section className={styles.wrapper}>
			<div className='container'>
				<div className={styles.contents}>
					<div className={styles.top}>
						<div className={styles.inner}>
							<Tags customStyle={{ color: 'black' }}>Our Blog</Tags>
						</div>
						<h1 className={styles.label}>Our Latest News</h1>
					</div>

					{cardBlog.map((path, index) => (
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
									{index === 0 && (
										<>
											<h2 className={styles.title}>{path.title}</h2>
										</>
									)}
									{index === 1 && (
										<>
											<h2 className={styles.title__colors}>{path.title} </h2>
										</>
									)}
									{index === 2 && (
										<>
											<h2 className={styles.title}>{path.title}</h2>
										</>
									)}
									<p className={styles.text}>
										We are dedicated in creating added value for our customers
										by implementing modern technology in our work.
									</p>

									<li>Urgent transport solutions</li>
									<li>Reliable & experienced staffs</li>
									<li>Urgent transport solutions</li>
									<li>Reliable & experienced staffs</li>
								</div>
							</div>
						</div>
					))}
					<ButtonDark />
				</div>
			</div>
		</section>
	)
}

export default Blog
