import { useEffect, useState } from 'react'
import HeadingTime from '../../../layout/heading/heading_top/heading_icons/HeadingTime'
import ButtonLight from '../../../ui/button/button_light/ButtonLight'
import Tags from '../../../ui/tags/Tags'
import styles from './Questions.module.scss'
import { questionsCard } from './questions_cards/questionsJS'
import Accordion from './questions_cards/AccordionsCard'

const Questions = ({}) => {

	return (
		<section className={styles.wrapper}>
			<div className={styles.background}></div>
			<div className='container'>
				<div className={styles.content}>
					<div className={styles.left}>
						<Tags>FAQ</Tags>
						<h1 className={styles.title}>Frequently Asked Questions</h1>

						<Accordion sections={questionsCard} />
					</div>

					<div className={styles.right}>
						<div className={styles.inner}>
							<Tags>Let’s Talk</Tags>

							<h1 className={styles.label}>
								You need any help? get free consultation
							</h1>

							<div className={styles.time}>
								<HeadingTime />
							</div>

							<ButtonLight>Contact Us</ButtonLight>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Questions
