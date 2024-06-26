import { FC } from 'react'
import { FooterDataContacts } from '@DataApi_test/FooterData/FooterData'

const FooterMenuContacts: FC = () => {
	return (
		<div className='footer__links'>
			<ul className='footer__links-list'>
				<h3>Контактные данные</h3>
				{FooterDataContacts &&
					FooterDataContacts.map(item => (
						<li key={item.id}>
							<a href='#'>{item.email}</a>
							<a href='#'>{item.phone}</a>
							<p>{item.privacy}</p>
							<div className='socials'>
								{item.img.map((image, index) => (
									<img
										key={index}
										src={image.svg}
										alt={`social-icon-${index}`}
									/>
								))}
							</div>
						</li>
					))}
			</ul>
		</div>
	)
}

export default FooterMenuContacts
