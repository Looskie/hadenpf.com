import * as React from 'react'
import classNames from 'classnames'

import AccessibleOnly from '$utils/AccessibleOnly'

import styles from './Headline.module.scss'

export interface HeadlineProps {
	title: string
	subtitle?: string

	titleLink?: string

	component?: React.ComponentType
	small?: boolean
	highlight?: boolean
	noSpacing?: boolean
}

const Headline: React.FC<HeadlineProps> = (props) => {
	const {
		title,
		subtitle,
		titleLink,
		highlight = false,
		noSpacing = false,
		small = false,
		component: Component = 'h1',
		...rest
	} = props

	return (
		<Component
			className={classNames(styles.Headline, {
				[styles.noSpacing]: noSpacing,
				[styles.highlight]: highlight,
				[styles.small]: small,
			})}
			{...rest}
		>
			<span className={styles.innerContent} role="text">
				<span className={styles.title}>
					<AccessibleOnly>{title}.</AccessibleOnly>
					<span aria-hidden="true">
						{!!titleLink ? (
							<a href={titleLink} className={styles.link}>
								{title}
							</a>
						) : (
							title
						)}
					</span>
				</span>
				{subtitle && <span className={styles.subtitle}> {subtitle}</span>}
			</span>
		</Component>
	)
}

export default Headline
