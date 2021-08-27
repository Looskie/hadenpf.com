import * as React from 'react'
import classes from './AccessibleOnly.module.scss'

const AccessibleOnly: React.FC = (props) => {
	return <div className={classes.a11yOnly}>{props.children}</div>
}

export const a11yOnlyClass = classes.a11yOnly
export default AccessibleOnly
