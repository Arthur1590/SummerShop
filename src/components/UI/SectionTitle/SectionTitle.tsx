import { FC } from 'react'
import './SectionTitle.scss'
interface ISectionTitle {
	text: string
	addText?: string
}
const SectionTitle: FC<ISectionTitle> = ({ text, addText }) => {
	return (
		<h1 className='section__title'>
			{text} <span>{addText}</span>
		</h1>
	)
}

export default SectionTitle
