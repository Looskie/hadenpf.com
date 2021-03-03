declare module '*.svg' {
  export const ReactComponent: React.FC<React.SVGAttributes<SVGElement>>

  const path: string
  export default path
}

declare module '*.jpg' {
  const path: string
  export default path
}

declare module '*.png' {
  const path: string
  export default path
}

declare module '*.gif' {
  const path: string
  export default path
}
