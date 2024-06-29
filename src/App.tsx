import Navigation from '@components/Header/Navigation'
import Home from './pages/Home'
import Footer from '@components/Footer/Footer'
import Main from '@components/main/Main'

function App() {
	return (
		<div className='App'>
			<Navigation />

			<Main>
				<Home />
			</Main>

			<Footer />
		</div>
	)
}

export default App
