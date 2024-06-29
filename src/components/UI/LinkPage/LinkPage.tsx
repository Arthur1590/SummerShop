import { FC } from 'react'

interface ILink {
	text: string
}
const LinkPage: FC<ILink> = ({text}) => {
	return <button className='link__page'>{text}</button>
}

export default LinkPage
