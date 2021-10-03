import * as React from 'react'
import styles from './Headline.module.scss'
import classNames from 'classnames'

export interface HeadlineProps {
	title: string
	subtitle?: string
	punctuate?: null | 'title' | 'subtitle' | 'both'

	titleLink?: string

	small?: boolean
	highlight?: boolean
	noSpacing?: boolean
}

const Headline: React.FC<HeadlineProps> = (props) => {
	const {
		title,
		subtitle,
		punctuate,
		titleLink,
		highlight = false,
		noSpacing = false,
		small = false,
		...rest
	} = props

	return (
		<h1
			className={classNames(styles.Headline, {
				[styles.noSpacing]: noSpacing,
				[styles.highlight]: highlight,
				[styles.small]: small,
			})}
			{...rest}
		>
			{!!titleLink ? (
				<a className={styles.title} href={titleLink}>
					{title}
					{['title', 'both'].includes(punctuate) && '.'}{' '}
				</a>
			) : (
				<span className={styles.title}>
					{title}
					{['title', 'both'].includes(punctuate) && '.'}{' '}
				</span>
			)}
			{subtitle && (
				<span className={styles.subtitle}>
					{' '}
					{subtitle}
					{['subtitle', 'both'].includes(punctuate) && '.'}
				</span>
			)}
		</h1>
	)
}

export default Headline
