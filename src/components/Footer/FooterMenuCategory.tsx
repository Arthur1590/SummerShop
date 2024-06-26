import { FooterDataCategory } from '@DataApi_test/FooterData/FooterData'
import { FC } from 'react'

const FooterMenuCategory: FC = () => {
	return (
		<div className='footer__links'>
			<ul className='footer__links-list'>
				<h3>Категории товаров</h3>
				{FooterDataCategory &&
					FooterDataCategory.map(item => (
						<li key={item.categoryItems}>
							<a href='#'>{item.categoryItems}</a>
						</li>
					))}
			</ul>
		</div>
	)
}

export default FooterMenuCategory
