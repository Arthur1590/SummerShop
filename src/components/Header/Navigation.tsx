import { FC } from 'react'
import './Navigation.scss'
import wish from '@DataApi_test/HeaderData/headerImg/wish.svg'
import cart from '@DataApi_test/HeaderData/headerImg/Cart.svg'
import search from '@DataApi_test/HeaderData/headerImg/search.svg'
import logo from '@DataApi_test/HeaderData/headerImg/LOGO.svg'
import { HeaderData } from '@DataApi_test/HeaderData/HeaderData'

const Navigation: FC = () => {
	return (
		<header className='header'>
			<nav className='header__nav'>
				<div className='container'>
					<ul className='header__nav-listRow'>
						<li className='header__nav-list-item'>
							<a href='tel:8 (800) 511 36 39 '>
								8 (800) 511 36 39  <span>— бесплатно по России</span>
							</a>
						</li>
						<li className='header__nav-list-item'>
							<a href='#'>
								<img src={logo} alt='' />
							</a>
						</li>
						<div className='icons__holder'>
							<img src={search} alt='search' />
							<img src={wish} alt='wish' />
							<img src={cart} alt='cart' />
						</div>
					</ul>
					<ul className='header__nav-list'>
						{HeaderData &&
							HeaderData.map(item => (
								<li className='header__nav-list-item' key={item.title}>
									<a className='header__nav-list-link' href='#'>
										{item.title}
									</a>
								</li>
							))}
						<a className='hot' href='#'>
							Распродажа до -40%
						</a>
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Navigation
