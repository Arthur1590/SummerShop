import { FC } from 'react'
import s from './CustomBtn.module.scss'

interface IDropWindow {
	onMove: () => void
}
const DropWindowBtn: FC<IDropWindow> = ({ onMove }) => {
	return (
		<button onMouseEnter={onMove} className={s.drop__windowBtn}>
			+
		</button>
	)
}

export default DropWindowBtn
