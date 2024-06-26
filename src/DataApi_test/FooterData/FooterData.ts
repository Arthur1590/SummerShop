import vk from './img/vk.svg'
import whatsapp from './img/whatapp.svg'
import facebook from './img/facebook.svg'

interface IFooterLinks {
	usefullLinks: string
}
export const FooterDataLinks: IFooterLinks[] = [
	{
		usefullLinks: 'Каталог',
	},
	{
		usefullLinks: 'Блог',
	},
	{
		usefullLinks: 'О бренде',
	},
	{
		usefullLinks: 'Калькулятор',
	},
	{
		usefullLinks: 'Размеры',
	},
	{
		usefullLinks: 'Доставка и оплата',
	},
	{
		usefullLinks: 'Подарочные сертификаты',
	},
	{
		usefullLinks: 'Распродажа до -40%',
	},
]
interface IFooterCategory {
	categoryItems: string
}
export const FooterDataCategory: IFooterCategory[] = [
	{
		categoryItems: 'Новая коллекция 2024',
	},
	{
		categoryItems: 'Распродажа купальников',
	},
	{
		categoryItems: 'Купальники для серфинга',
	},
	{
		categoryItems: 'Лайкра для серфинга',
	},
	{
		categoryItems: 'Раздельные купальники',
	},
	{
		categoryItems: 'Купальники с рукавами',
	},
	{
		categoryItems: 'Купальники без рукавов',
	},
	{
		categoryItems: 'Купальники с чашечками',
	},
	{
		categoryItems: 'Слитные купальники',
	},
]
interface IFooterPopular {
	mostPopular: string
}
export const FooterDataPopular: IFooterPopular[] = [
	{
		mostPopular: 'Черные купальники с рукавами',
	},
	{
		mostPopular: 'Закрытые купальники с рукавами',
	},
	{
		mostPopular: 'Купальники с сеткой',
	},
	{
		mostPopular: 'Спортивные купальники для бассейна',
	},
	{
		mostPopular: 'Купальники с принтом',
	},
	{
		mostPopular: 'Купальники с закрытыми плечами',
	},
]
interface ISvg {
	svg: string
}
interface IFooterContacts {
	email?: string
	phone?: string
	privacy?: string
	img: ISvg[]
	id: number
}
export const FooterDataContacts: IFooterContacts[] = [
	{
		id: 1,
		email: 'example@example.com',
		phone: '+1234567890',
		privacy:
			'Информация для покупателей Wave Harmony - женская одежда для серфинга и любых других, водных видов спорта. Все права защищены. 2024',
		img: [{ svg: vk }, { svg: whatsapp }, { svg: facebook }],
	},
]
