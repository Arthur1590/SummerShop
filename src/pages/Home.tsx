import { FC } from 'react'
import IntroSwiper from '@components/main/IntroSwiper/IntroSwiper'
import ModelsSwiper from '@components/main/PopularModels/ModelsSwiper'
import Comments from '@components/main/Comments/Comments'
import Review from '@components/main/GridReview/Review'
import './Pages.scss'

const Home: FC = () => {
	return (
		<>
			<div className='home'>
				<IntroSwiper />
				<ModelsSwiper />
				<Comments />
				<Review />
			</div>
		</>
	)
}

export default Home
