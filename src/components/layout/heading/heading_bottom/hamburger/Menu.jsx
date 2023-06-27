import cn from 'clsx'
import styles from './Hamburger.module.scss'
import { menu } from './menu.data'
import { Link } from 'react-router-dom'

const Menu = ({ isShow }) => {
	return (
		<nav
			className={cn(styles.menu, {
				[styles.show]: isShow
			})}
		>
			<ul className={styles.menuMap}>
				{menu.map((item, index) => (
					<li className={styles.inner} key={`_menu_${index}`}>
						<Link className={styles.links} to={item.link}>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Menu
