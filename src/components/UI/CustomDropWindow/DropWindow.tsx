import { FC } from 'react'

interface IDrop {
	text: string
}
const DropWindow: FC<IDrop> = ({text}) => {
	return (
		<div className='dropped__window'>
			<p>{text}</p>
		</div>
	)
}

export default DropWindow
