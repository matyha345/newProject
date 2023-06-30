import Footer from '../../layout/footer/Footer'
import HeadingBottom from '../../layout/heading/heading_bottom/HeadingBottom'
import HeadingTop from '../../layout/heading/heading_top/HeadingTop'
import styles from './BlogSingle.module.scss'
import BlogContent from './blog_content/BlogContent'
import mainSVG from '/images/svg/blogSingle.svg'

const BlogSingle = () => {
	return (
		<>
			<HeadingTop />

			<div className={styles.wrapper}>
				<HeadingBottom />

				<div className='container'>
					<div className={styles.content}>
						<div className={styles.svgTitle}>
							<div className={styles.svg}>
								<img src={mainSVG} alt='mainSVG' />
							</div>
							<div className={styles.svgText}>
								<h2>12</h2>
								<p className={styles.innerText}>March</p>
							</div>
						</div>
						<h1 className={styles.title}>How technology can help redraw the supply chain map</h1>
					</div>
				</div>
			</div>

            <BlogContent />

			<Footer />
		</>
	)
}

export default BlogSingle
