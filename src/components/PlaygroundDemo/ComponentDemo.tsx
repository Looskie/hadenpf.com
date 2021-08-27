import * as React from 'react'

const PlaygroundComponent: React.FC<{ importPath: string }> = (props) => {
	const { importPath, ...rest } = props
	const [component, setComponent] = React.useState<React.ReactElement>(null)

	React.useEffect(() => {
		console.log('Importing content demo from', importPath)

		import(importPath)
			.then((imported) => {
				const ImportedComponent: React.ComponentType<{
					style: React.CSSProperties
				}> = imported.default
				setComponent(
					<ImportedComponent
						style={{
							minWidth: 350,
							width: '50vw',
							maxWidth: 700,
						}}
						{...rest}
					/>
				)
			})
			.catch((err) => {
				console.error('Error while loading component demo!', err, err.stack)

				setComponent(
					<div
						style={{
							color: 'red',
							textAlign: 'center',
						}}
					>
						Couldn't load component demo :( <br />{' '}
						<small>See console for details</small>
					</div>
				)
			})
	}, [])

	return component || <div>Component demo loading...</div>
}

export default PlaygroundComponent
