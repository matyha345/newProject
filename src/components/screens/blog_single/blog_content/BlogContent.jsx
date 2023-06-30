
import styles from './BlogContent.module.scss'
import AsideBlogContent from './aside/AsideBlogContent'
import MainBlogContent from './main/MainBlogContent'
import Main from './main/MainBlogContent'

const BlogContent = () => {
	return (
		<section className={styles.wrapper}>
			<div className='container'>
				<div className={styles.content}>
					<MainBlogContent />
                    <AsideBlogContent />
				</div>
			</div>
		</section>
	)
}

export default BlogContent
