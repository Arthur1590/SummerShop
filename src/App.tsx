import Navigation from '@components/Header/Navigation'
import Home from './pages/Home'
import Footer from '@components/Footer/Footer'

function App() {
	return (
		<div className='App'>
			<Navigation />
			<main className='main'>
				<Home />
				
			</main>

			<Footer />
		</div>
	)
}

export default App
