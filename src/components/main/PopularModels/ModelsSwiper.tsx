import { ModelsData } from '@DataApi_test/ModelsSwiperData/ModelsData'
import SectionTitle from '@UI/SectionTitle/SectionTitle'
import Container from '@components/container/Container'
import { FC } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Models.scss'
import LinkPage from '@UI/LinkPage/LinkPage'

const ModelsSwiper: FC = () => {
	return (
		<section className='models'>
			<Container>
				<SectionTitle
					text='Самые популярные модели'
					addText='то что выбирают наши прекрасные клиентки'
				/>
				<LinkPage text='Смотерть весь каталог' />
				<Swiper
					className='models__swiper'
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={0}
					slidesPerView={4}
					navigation
					pagination={{ clickable: true }}
				>
					{ModelsData &&
						ModelsData.map(item => (
							<SwiperSlide key={item.id} className='models__swiper-slide'>
								<div className='models__swiper-slide-content'>
									<img src={item.img} alt='' />
									<div className='models__swiper-slide-content-info'>
										<p className='price'>{item.price}&#8381;</p>
										<p className='title'>{item.title}</p>
										<p className='body__size'>
											{item.size.map(item => (
												<span key={item.sizeBody}>{item.sizeBody}</span>
											))}
										</p>
									</div>
								</div>
							</SwiperSlide>
						))}
				</Swiper>
			</Container>
		</section>
	)
}

export default ModelsSwiper
