import { FC } from 'react'
import s from './CustomBtn.module.scss';

interface IBtn {
	text: string
}
const CustomBtn: FC<IBtn> = ({text}) => {
	return (
		<button className={s.customButton}>{text}</button>
	)
}

export default CustomBtn