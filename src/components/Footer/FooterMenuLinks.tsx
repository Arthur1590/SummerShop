import { FooterDataLinks } from '@DataApi_test/FooterData/FooterData'
import { FC } from 'react'

const FooterMenuLinks: FC = () => {
	return (
		<div className='footer__links'>
			<ul className='footer__links-list'>
				<h3>Полезные ссылки</h3>
				{FooterDataLinks &&
					FooterDataLinks.map(item => (
						<li key={item.usefullLinks}>
							<a href='#'>{item.usefullLinks}</a>
						</li>
					))}
			</ul>
		</div>
	)
}

export default FooterMenuLinks
