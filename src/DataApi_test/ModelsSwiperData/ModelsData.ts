import img1 from './img/photo1.png'
import img2 from './img/photo2.png'
import img3 from './img/photo3.png'
import img4 from './img/photo.png'

interface ISize {
	sizeBody: string
}
interface IModelsSwiper {
	img: string
	id: number
	title: string
	price: number
	size: ISize[]
}
export const ModelsData: IModelsSwiper[] = [
	{
		id: 1,
		img: img1,
		title: 'Sunybeach',
		price: Math.floor(Math.random() * 6000),
		size: [
			{ sizeBody: 'XS' },
			{ sizeBody: 'S' },
			{ sizeBody: 'M' },
			{ sizeBody: 'L' },
			{ sizeBody: 'По меркам' },
		],
	},
	{
		id: 2,
		img: img2,
		title: 'Wildness',
		price: Math.floor(Math.random() * 6000),
		size: [
			{ sizeBody: 'XS' },
			{ sizeBody: 'S' },
			{ sizeBody: 'M' },
			{ sizeBody: 'L' },
			{ sizeBody: 'По меркам' },
		],
	},
	{
		id: 3,
		img: img3,
		title: 'Pinkness',
		price: Math.floor(Math.random() * 6000),
		size: [
			{ sizeBody: 'XS' },
			{ sizeBody: 'S' },
			{ sizeBody: 'M' },
			{ sizeBody: 'L' },
			{ sizeBody: 'По меркам' },
		],
	},
	{
		id: 4,
		img: img4,
		title: 'Geometry',
		price: Math.floor(Math.random() * 6000),
		size: [
			{ sizeBody: 'XS' },
			{ sizeBody: 'S' },
			{ sizeBody: 'M' },
			{ sizeBody: 'L' },
			{ sizeBody: 'По меркам' },
		],
	},
	{
		id: 5,
		img: img4,
		title: 'Geometry',
		price: Math.floor(Math.random() * 6000),
		size: [
			{ sizeBody: 'XS' },
			{ sizeBody: 'S' },
			{ sizeBody: 'M' },
			{ sizeBody: 'L' },
			{ sizeBody: 'По меркам' },
		],
	},
	{
		id: 6,
		img: img4,
		title: 'Geometry',
		price: Math.floor(Math.random() * 6000),
		size: [
			{ sizeBody: 'XS' },
			{ sizeBody: 'S' },
			{ sizeBody: 'M' },
			{ sizeBody: 'L' },
			{ sizeBody: 'По меркам' },
		],
	},
	{
		id: 7,
		img: img4,
		title: 'Geometry',
		price: Math.floor(Math.random() * 6000),
		size: [
			{ sizeBody: 'XS' },
			{ sizeBody: 'S' },
			{ sizeBody: 'M' },
			{ sizeBody: 'L' },
			{ sizeBody: 'По меркам' },
		],
	},
	{
		id: 8,
		img: img4,
		title: 'Geometry',
		price: Math.floor(Math.random() * 6000),
		size: [
			{ sizeBody: 'XS' },
			{ sizeBody: 'S' },
			{ sizeBody: 'M' },
			{ sizeBody: 'L' },
			{ sizeBody: 'По меркам' },
		],
	},
	{
		id: 9,
		img: img4,
		title: 'Geometry',
		price: Math.floor(Math.random() * 6000),
		size: [
			{ sizeBody: 'XS' },
			{ sizeBody: 'S' },
			{ sizeBody: 'M' },
			{ sizeBody: 'L' },
			{ sizeBody: 'По меркам' },
		],
	},
	{
		id: 10,
		img: img4,
		title: 'Geometry',
		price: Math.floor(Math.random() * 6000),
		size: [
			{ sizeBody: 'XS' },
			{ sizeBody: 'S' },
			{ sizeBody: 'M' },
			{ sizeBody: 'L' },
			{ sizeBody: 'По меркам' },
		],
	},
	{
		id: 11,
		img: img4,
		title: 'Geometry',
		price: Math.floor(Math.random() * 6000),
		size: [
			{ sizeBody: 'XS' },
			{ sizeBody: 'S' },
			{ sizeBody: 'M' },
			{ sizeBody: 'L' },
			{ sizeBody: 'По меркам' },
		],
	},
	{
		id: 12,
		img: img4,
		title: 'Geometry',
		price: Math.floor(Math.random() * 6000),
		size: [
			{ sizeBody: 'XS' },
			{ sizeBody: 'S' },
			{ sizeBody: 'M' },
			{ sizeBody: 'L' },
			{ sizeBody: 'По меркам' },
		],
	},
]
