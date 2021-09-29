import * as React from 'react'
import Avatar from '$atoms/Avatar'
import Headline, { HeadlineProps } from '$atoms/Headline'
import styles from './AvatarHeadline.module.scss'

export interface AvatarHeadlineProps extends HeadlineProps {
	avatar: string
}

const AvatarHeadline: React.FC<AvatarHeadlineProps> = (props) => {
	const { avatar, title, subtitle, punctuate, ...rest } = props

	return (
		<div className={styles.AvatarHeadline} {...rest}>
			<Avatar alt="Headshot" className={styles.Avatar} url={avatar} />
			<Headline
				noSpacing
				{...{
					title,
					subtitle,
					punctuate,
				}}
			/>
		</div>
	)
}

export default AvatarHeadline
