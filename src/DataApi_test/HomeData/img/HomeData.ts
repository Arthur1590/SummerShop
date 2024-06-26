import long1 from './long/ocean_1.png'
import long2 from './long/ocean_2_tween.png'
import short1 from './short/photo-1.png'
import short2 from './short/photo-2.png'
import short3 from './short/photo-3.png'

interface ISwiper {
	title?: string
	img: string
	id: number
	text: string
	dropText: string
}
export const HomeData: ISwiper[] = [
	{
		id: Math.floor(Math.random() * 100 - 1 + 2),
		img: long1,
		text: 'С длинными рукавами',
		title: 'Ocean',
		dropText: 'Невидимые швы, идеально вписываются в дизайн',
	},
	{
		id: Math.floor(Math.random() * 100 - 1 + 2),
		img: long2,
		text: 'С длинными рукавами',
		title: 'Ocean',
		dropText: 'Свободные и удобные',
	},
	{
		id: Math.floor(Math.random() * 100 - 1 + 2),
		img: short1,
		text: 'Без рукавов',
		title: 'Geometry',
		dropText: 'Идеально облегают вашу фигуру',
	},
	{
		id: Math.floor(Math.random() * 100 - 1 + 2),
		img: short2,
		text: 'Без рукавов',
		title: 'Wildness',
		dropText: 'Стойкость к трению',
	},
	{
		id: Math.floor(Math.random() * 100 - 1 + 2),
		img: short3,
		text: 'Без рукавов',
		title: 'Pinkness',
		dropText: 'Нежная для чувствиельных зон',
	},
]
