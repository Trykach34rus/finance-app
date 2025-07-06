import { Route, Routes } from 'react-router'
import Header from './Componetnts/Header/Header.tsx'
import Analytic from './Pages/Analytic.tsx'
import Dashboard from './Pages/Dashboard.tsx'
import MyWallet from './Pages/MyWallet.tsx'

function App() {
	return (
		<div className='app-container'>
			<Header />
			<div className='container'>
				<Routes>
					<Route path='/' element={<Dashboard />} />
					<Route path='/analytics' element={<Analytic />} />
					<Route path='/my-wallet' element={<MyWallet />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
