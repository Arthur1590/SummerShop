import { FC } from 'react'
import FooterMenuLinks from './FooterMenuLinks'
import FooterMenuCategory from './FooterMenuCategory'
import FooterMenuPopular from './FooterMenuPopular'
import FooterMenuContacts from './FooterMenuContacts'
import './Footer.scss'

const Footer: FC = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<FooterMenuLinks />
				<FooterMenuCategory />
				<FooterMenuPopular />
				<FooterMenuContacts />
			</div>
		</footer>
	)
}

export default Footer
