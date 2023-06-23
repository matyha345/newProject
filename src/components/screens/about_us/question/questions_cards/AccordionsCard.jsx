

import { useState } from 'react'
import styles from './AccordionsCard.module.scss'

const accordionStyles = { maxWidth: '600px' }

const accordionTitleStyles = {
	display: 'flex',
	justifyContent: 'space-between',
	cursor: 'pointer',
	padding: '5px',
	background: '#21aeca'
}

const accordionContentStyles = {
	padding: '5px',
	background: '#39b9d2'
}

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
				<div style={accordionTitleStyles} onClick={toggleSection}>
					<div className={styles.accHead}>{section.title}</div>
					<div>{isActiveSection ? '-' : '+'}</div>
				</div>
				{isActiveSection && (
					<div className={styles.accBody}>{section.dataText}</div>
				)}
			</div>
		</>
	)
}

const Accordion = ({ sections }) => {
	const [activeIndex, setActiveIndex] = useState(0)

	return (
		<div style={accordionStyles}>
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
