import Tags from '../../../ui/tags/Tags'
import styles from './Blog.module.scss'

const Blog = ({ children, buttonBottom }) => {
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
					{children}
					{buttonBottom}
				</div>
			</div>
		</section>
	)
}

export default Blog
