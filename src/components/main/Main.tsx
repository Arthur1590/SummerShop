import { FC, ReactNode } from 'react'

interface IMain {
	children: ReactNode
}
const Main: FC<IMain> = ({children}) => {
	return (
		<main className="main">
			{children}
		</main>
	)
}

export default Main