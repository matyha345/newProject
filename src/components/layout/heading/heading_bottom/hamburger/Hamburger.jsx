import { useState } from 'react'
import styles from './Hamburger.module.scss'
import { FiChevronDown } from 'react-icons/fi'
import { FiChevronUp } from 'react-icons/fi'
import Menu from './Menu'
import { useOnClickOutside } from '../../../../../hooks/useOnClickOutside'

const Hamburger = () => {
	const {isShow, ref, setIsShow} = useOnClickOutside(false)

	return (
		<>
			<div className={styles.wrapper} ref={ref}>
				<button className={styles.btn} onClick={() => setIsShow(!isShow)} href='#'>
					Pages 
					{isShow ? (
						<FiChevronUp color='#fff' fontSize={25} />
					) : (
						<FiChevronDown color='#ffb629' fontSize={25} />
					)}
				</button>
                <Menu  isShow={isShow} setIsShow={setIsShow}/>
			</div>
		</>
	)
}

export default Hamburger
