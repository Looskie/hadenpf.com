declare module '*.astro' {
	const component: any
	export default component
}

declare module '*.scss' {
	const classes: Record<string, string>
	export default classes
}
