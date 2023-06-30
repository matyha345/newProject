import ButtonNormal from '../../../../ui/button/button_normal/ButtonNormail'
import Tags from '../../../../ui/tags/Tags'
import styles from './AsideBlogContent.module.scss'

const AsideBlogContent = () => {
	const asideCard = [
		{
			title: 'Shipping',
			number: '(3)'
		},
		{
			title: 'Services',
			number: '(5)'
		},
		{
			title: 'Transport',
			number: '(2)'
		},
		{
			title: 'Warehouse',
			number: '(2)'
		},
		{
			title: 'Transport Industries',
			number: '(5)'
		}
	]

	return (
		<div className={styles.aside}>
			<div className={styles.categories}>
				<h1 className={styles.titleAside}>Categories</h1>
				{asideCard.map((path, index) => (
					<div className={styles.textAside} key={`_mapCard${index}`}>
						<p className={styles.label}>{path.title}</p>
						<p className={styles.number}>{path.number}</p>
					</div>
				))}
			</div>

			<div className={styles.blog}>
				<div className={styles.blogTitle}>How can we help you?</div>
				<p className={styles.blogText}>
					Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam
					lobortis dapib libero vel porttitor. Nulla tempor elit nec feugiat
					tempus Phasellus atquam.
				</p>
				<div className={styles.btn}>
					<ButtonNormal>Contact</ButtonNormal>
				</div>
			</div>

			<div className={styles.bgBottom}>
				<div className={styles.tag}>
					<Tags customStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', fontWeight: '600' }}>
						Get In Touch
					</Tags>
				</div>

				<div className={styles.help}>
					Need help?
					<a href='tel:(00) 112 365 489'>(00) 112 365 489</a>
				</div>
					<span></span>
				<div className={styles.email}>
					Email
					<a href='mailto:contact@logistics.com'>contact@logistics.com</a>
				</div>
			</div>
		</div>
	)
}

export default AsideBlogContent
