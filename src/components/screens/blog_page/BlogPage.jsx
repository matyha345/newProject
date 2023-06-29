import Footer from '../../layout/footer/Footer'
import HeadingBottom from '../../layout/heading/heading_bottom/HeadingBottom'
import HeadingTop from '../../layout/heading/heading_top/HeadingTop'
import OurLatestNews from '../../ui/blog_card/OurLatestNews'
import Tags from '../../ui/tags/Tags'
import Blog from '../Home/blog/Blog'



import styles from './BlogPage.module.scss'

const BlogPage = () => {
	return (
		<>
			<HeadingTop />
			<section className={styles.wrapper}>
				<HeadingBottom />

				<div className='container'>
					<div className={styles.content}>
						<div className={styles.tag}>
							<Tags>Blog</Tags>
						</div>

						<h1 className={styles.title}>Our Latest News</h1>
					</div>
				</div>
			</section>
			<Blog children={<OurLatestNews visibleCount={5} />}/>

			<Footer />
		</>
	)
}

export default BlogPage
