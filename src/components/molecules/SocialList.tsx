import * as React from 'react'
import styles from './SocialList.module.scss'

export const DEFAULT_SOCIAL_LIST = [
	// {
	// 	icon: 'linkedin',
	// 	alt: 'Connect on LinkedIn',
	// 	url: 'https://linkedin.com/in/hadenpf',
	// },
	{
		icon: 'github',
		alt: 'Follow me on GitHub',
		url: 'https://github.com/hadenpf',
	},
	{
		icon: 'twitter',
		alt: 'Follow me on Twitter',
		url: 'https://twitter.com/hadenpf',
	},
	{
		icon: 'email',
		alt: 'Send me an email',
		url: 'mailto:heyo@hadenpf.com',
	},
]

export interface SocialListProps {
	items?: Array<{
		text: string
		link: string
		target?: string
	}>
}

const SocialList: React.FC<SocialListProps> = (props) => {
	const { items = DEFAULT_SOCIAL_LIST, ...rest } = props

	return (
		<>
			<div>wip: adding icons to this in a sec lol</div>
			<ul className={styles.SocialList} {...rest}>
				{items.map((item) => (
					<li>
						<a href={item.url} target="_self">
							{/* _self:
								someone who navigates to a social page probably does _not_ want to come back
								to the site. this is a quick portal! */}
							{item.alt}
						</a>
					</li>
				))}
			</ul>
		</>
	)
}

export default SocialList
