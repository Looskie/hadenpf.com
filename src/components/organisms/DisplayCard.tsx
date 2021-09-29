import * as React from 'react'
import * as path from 'node:path'
import Headline from '$atoms/Headline'
import styles from './DisplayCard.module.scss'

export interface DisplayCardProps {
	title: string
	subtitle: string
	featured?: boolean

	image?: string
}

const DisplayCard: React.FC<DisplayCardProps> = (props) => {
	const { title, subtitle, featured = false, image = '/avi.png' } = props

	return (
		<div
			style={{
				backgroundImage: `url('${image}')`,
			}}
			className={styles.displayCard}
		>
			<Headline small noSpacing title={title} subtitle={subtitle} />
		</div>
	)
}

export default DisplayCard
