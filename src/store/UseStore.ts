import { create } from 'zustand'
import girl1 from '../components/main/Comments/img/girl1.png'
import girl2 from '../components/main/Comments/img/girl2.png'
import girl3 from '../components/main/Comments/img/girl3.png'
import girl4 from '../components/main/Comments/img/girl4.png'
import bigComm1 from '../components/main/Comments/img/bigComm1.png'
import bigComm2 from '../components/main/Comments/img/bigComm2.png'
import bigComm3 from '../components/main/Comments/img/bigComm3.png'
import bigComm4 from '../components/main/Comments/img/bigComm4.png'

interface ITabs {
	id: number
	img: string
	profile: string
	title: string
	text: string
	social: string
	followers: string
	review: string
	vidLink: string
}
interface IUseStore {
	tabs: ITabs[]
	currTab: ITabs | null
	getTabs: (tab: ITabs) => void
}
export const useStore = create<IUseStore>(set => ({
	tabs: [
		{
			id: 1,
			img: girl1,
			profile: bigComm1,
			title: 'Регина',
			followers: '8,5млн. подписчиков',
			text: 'Блогер, телеведущая, певица, завезда передачи «Орел и Решка», молодая мама и просто суперхаризматичная персона, ловит волну вместе с Wave Harmony',
			social: '@reginatodorenko',
			review: 'Читать отзыв',
			vidLink: 'Видео Регины',
		},
		{
			id: 2,
			img: girl2,
			profile: bigComm2,
			title: 'Алина',
			followers: '1,5млн. подписчиков',
			text: 'Как блогер, телеведущая и певица, а также звезда шоу «Звезда» и молодая мама, я, полная харизмы, наслаждаюсь каждой волной вместе с Wave Harmony.',
			social: '@alinkaZXC',
			review: 'Читать отзыв',
			vidLink: 'Видео Алины',
		},
		{
			id: 3,
			img: girl3,
			profile: bigComm3,
			title: 'Олеся',
			followers: '5млн. подписчиков',
			text: 'Телеведущая, певица и популярная личность, известная по программе «Выжить в Самарканде», я также являюсь молодой мамой и суперхаризматичной персоной, которая ловит волны с Wave Harmony.',
			social: '@OlesSuper',
			review: 'Читать отзыв',
			vidLink: 'Видео Олеси',
		},
		{
			id: 4,
			img: girl4,
			profile: bigComm4,
			title: 'Елена',
			followers: '1,5млрд. подписчиков',
			text: 'Я певица, телеведущая и звезда «НЕИГРЫ», молодая мама с невероятной харизмой, и теперь я тоже ловлю волну с Wave Harmony.',
			social: '@Mamedova',
			review: 'Читать отзыв',
			vidLink: 'Видео Елены',
		},
	],
	currTab: null,
	getTabs: (tab: ITabs) => set({ currTab: tab }),
}))
