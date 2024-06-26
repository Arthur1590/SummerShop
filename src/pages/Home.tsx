import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y, Navigation } from 'swiper/modules'
import { FC, useState } from 'react'
import { HomeData } from '@DataApi_test/HomeData/img/HomeData'
import CustomBtn from '@UI/CustomBtn/CustomBtn'
import DropWindowBtn from '@UI/CustomBtn/DropWindowBtn'
import DropWindow from '@UI/CustomDropWindow/DropWindow'
import './pages.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Home: FC = () => {
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
		<div className='home' onClick={activeHandlerOff}>
			<div className='home__bg-wrapper'>
				<Swiper
					className='home__slider'
					modules={[Pagination, A11y, Navigation]}
					spaceBetween={50}
					slidesPerView={1}
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					onSlideChange={activeHandlerOff}
				>
					{HomeData &&
						HomeData.map(item => (
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
			</div>
		</div>
	)
}

export default Home
