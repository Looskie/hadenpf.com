import * as React from 'react'
// import { RiAlertLine } from 'react-icons/ri'
import AccessibleOnly from '../../utils/AccessibleOnly'
import classes from './nice-text-input.module.scss'

export interface TextInputProps {
	label: string
	id: string
	error?: string
}

const demoProps: React.HTMLProps<HTMLInputElement> & TextInputProps = {
	label: 'Email address',
	id: 'demoInput',
	type: 'email',
}

const TextInput: React.FC<React.HTMLProps<HTMLInputElement> & TextInputProps> =
	(props) => {
		const {
			style,
			className,
			label,
			id: inputId,
			error,
			value: _unused_value,
			children, // should never be populated
			...rest
		} = { ...demoProps, ...props }

		const labelId = `${inputId}.label`
		const errorId = `${inputId}.error`

		const [value, setValue] = React.useState<string>('')
		const innerInput = React.useRef<HTMLInputElement>()
		React.useEffect(() => {
			if (!innerInput.current) return

			innerInput.current.value = value
		}, [value])

		return (
			<div
				className={[classes.outerContainer, className].join(' ')}
				style={style}
			>
				<div className={classes.inputContainer}>
					<input
						className={[
							classes.innerInput,
							error ? classes.hasError : null,
						].join(' ')}
						id={inputId}
						aria-labelledby={labelId}
						aria-describedby={!!error ? errorId : undefined}
						ref={innerInput}
						value={value}
						onChange={(e) => setValue(e.target.value)}
						{...rest}
					/>
					<label
						className={classes.label}
						id={labelId}
						htmlFor={inputId}
						aria-hidden
					>
						{label}
					</label>
				</div>
				{error ? (
					<div className={classes.errorContainer} id={errorId}>
						{/* TODO: replace this icon -- this was ripped from original implementation */}
						{/* <RiAlertLine size={18} /> */}
						<AccessibleOnly>Input Error:</AccessibleOnly>
						{error}
					</div>
				) : null}
			</div>
		)
	}

export default TextInput
