import { useState } from 'react'
import styles from './AccordionsCard.module.scss'
import { FiChevronRight } from 'react-icons/fi'
import { FiChevronDown } from 'react-icons/fi'

const Accordions = ({
	section,
	isActiveSection,
	setActiveIndex,
	sectionIndex
}) => {
	const toggleSection = () => {
		const nextIndex = isActiveSection ? null : sectionIndex

		setActiveIndex(nextIndex)
	}
	return (
		<>
			<div className={styles.accordion}>
				<div className={styles.titleStyles} onClick={toggleSection}>
					<div className={styles.accHead}>{section.title}</div>
					<div className={styles.arrow}>
						{isActiveSection ? (
							<FiChevronDown color='#ffbe34' fontSize={30} />
						) : (
							<FiChevronRight  fontSize={30} />
						)}
					</div>
				</div>
				<div
					className={`${styles.accBody} ${
						isActiveSection ? styles.active : ''
					}`}
				>
					<div className={styles.content}>{section.dataText}</div>
				</div>
			</div>
		</>
	)
}

const Accordion = ({ sections }) => {
	const [activeIndex, setActiveIndex] = useState(0)

	return (
		<div className={styles.accordionStyles}>
			{sections.map((section, index) => (
				<Accordions
					section={section}
					key={index}
					isActiveSection={index === activeIndex}
					setActiveIndex={setActiveIndex}
					sectionIndex={index}
				/>
			))}
		</div>
	)
}

export default Accordion
