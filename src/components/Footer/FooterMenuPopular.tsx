import { FooterDataPopular } from '@DataApi_test/FooterData/FooterData'
import { FC } from 'react'

const FooterMenuPopular: FC = () => {
	return (
		<div className='footer__links'>
			<ul className='footer__links-list'>
				<h3>Часто ищут</h3>
				{FooterDataPopular &&
					FooterDataPopular.map(item => (
						<li key={item.mostPopular}>
							<a href='#'>{item.mostPopular}</a>
						</li>
					))}
			</ul>
		</div>
	)
}

export default FooterMenuPopular
