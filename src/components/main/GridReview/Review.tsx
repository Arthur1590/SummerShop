import { FC } from 'react'
import SectionTitle from '@UI/SectionTitle/SectionTitle'
import Container from '@components/container/Container'
import './Review.scss'
import {
	ReviewData,
	bikiniGirl,
	waveDecor,
} from '@DataApi_test/ReviewData/ReviewData'

const Review: FC = () => {
	return (
		<section className='review'>
			<Container>
				<SectionTitle text='Лучшая одежда для серфинга и других водных видов спорта' />
				<div className='review__wrapper'>
					<div className='review__wrapper-grid'>
						<img src={waveDecor} alt='Wave vector' />
						<div className='review__wrapper-grid-items'>
							{ReviewData &&
								ReviewData.map(item => (
									<div
										key={item.id}
										className='review__wrapper-grid-items-item'
									>
										<h5>{item.title}</h5>
										<p>{item.text}</p>
									</div>
								))}
						</div>
					</div>
					<img className='bikini__girl' src={bikiniGirl} alt='Bikini girl' />
				</div>
			</Container>
		</section>
	)
}

export default Review
