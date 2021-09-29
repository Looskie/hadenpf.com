import classNames from 'classnames'
import * as React from 'react'
import styles from './Avatar.module.scss'

export interface AvatarProps extends React.ComponentProps<'img'> {
	url: string
	alt?: string
}

const Avatar: React.FC<AvatarProps> = (props) => {
	const { url, alt = '', className, ...rest } = props

	return (
		<img
			className={classNames(styles.Avatar, className)}
			alt={alt}
			src={url}
			{...rest}
		/>
	)
}

export default Avatar
