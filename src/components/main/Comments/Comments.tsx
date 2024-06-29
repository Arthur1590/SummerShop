import { FC, useEffect } from 'react'
import LinkPage from '@UI/LinkPage/LinkPage'
import SectionTitle from '@UI/SectionTitle/SectionTitle'
import Container from '@components/container/Container'
import { useStore } from '@store/UseStore'
import './Comments.scss'

const Comments: FC = () => {
	const { tabs, currTab, getTabs } = useStore()

	useEffect(() => {
		if (tabs.length > 0) {
			getTabs(tabs[0])
		}
	}, [tabs, getTabs])
	
	return (
		<section className='comments'>
			<Container>
				<SectionTitle text='Нам доверяют' />
				<LinkPage text='Больше о нас' />
				<div className='comments__wrapper'>
					<div className='comments__wrapper-tabs'>
						{tabs &&
							tabs.map(item => (
								<img
									onClick={() => getTabs(item)}
									key={item.id}
									src={item.img}
									alt={item.img}
								/>
							))}
					</div>
					<figure className='comments__wrapper-profile'>
						{currTab && <img src={currTab.profile} alt={currTab.profile} />}
					</figure>
					<div className='comments__wrapper-content'>
						{currTab && (
							<div className='comments__wrapper-content-info'>
								<div className='pink__light'></div>
								<div className='ocean__light-top'></div>
								<h1>{currTab.title}</h1>
								<p className='add__info'>
									<a href='@reginatodorenko'>{currTab.social}</a>
									<span>{currTab.followers}</span>
								</p>
								<p>{currTab.text}</p>
								<div className='controlls'>
									<a href='#'>
										<button>{currTab.review}</button>
									</a>
									<a href='#'>
										<button>{currTab.vidLink}</button>
									</a>
								</div>
								<div className='ocean__light-bottom'></div>
							</div>
						)}
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Comments
