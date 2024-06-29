import { FC, useState } from 'react'
import { IntroData } from '@DataApi_test/IntroSwiperData/img/IntroData'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y, Navigation, Autoplay } from 'swiper/modules'
import CustomBtn from '@UI/CustomBtn/CustomBtn'
import DropWindowBtn from '@UI/CustomBtn/DropWindowBtn'
import DropWindow from '@UI/CustomDropWindow/DropWindow'
import './IntroSwiper.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Container from '@components/container/Container'

const IntroSwiper: FC = () => {
	const [isActive, setIsActive] = useState(false)

	const activeHandler = () => {
		setIsActive(true)
		console.log(isActive)
	}
	const activeHandlerOff = () => {
		setIsActive(false)
		console.log(isActive)
	}
	return (
		<section className='home__bg-wrapper' onClick={activeHandlerOff}>
			<Container>
				<Swiper
					className='home__slider'
					modules={[Pagination, A11y, Navigation, Autoplay]}
					spaceBetween={50}
					slidesPerView={1}
					pagination={{ clickable: true }}
					autoplay={{
						delay: 4000000,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					}}
					onSlideChange={activeHandlerOff}
				>
					{IntroData &&
						IntroData.map(item => (
							<SwiperSlide key={item.id}>
								<div className='swiper-slide-content'>
									<article>
										<h1>{item.title}</h1>
										<p>{item.text}</p>
										<CustomBtn text='Купить' />
									</article>
									<figure>
										<img src={item.img} alt={item.img} />
										<DropWindowBtn onMove={activeHandler} />
										{isActive ? <DropWindow text={item.dropText} /> : null}
									</figure>
								</div>
							</SwiperSlide>
						))}
				</Swiper>
			</Container>
		</section>
	)
}

export default IntroSwiper
