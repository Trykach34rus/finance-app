import { useLocation, useNavigate } from 'react-router'
import Analytics from '../../ProgectFoto/Analytics.svg'
import dashboard from '../../ProgectFoto/dashboard.svg'
import Moon from '../../ProgectFoto/Moon.svg'
import MyWallet from '../../ProgectFoto/MyWallet.svg'
import uifry from '../../ProgectFoto/uifry.svg'
import st from './Header.module.scss'

export default function Header() {
	const navigate = useNavigate()
	const location = useLocation()
	return (
		<div className={st.root}>
			<div className={st.logo}>
				<img src={uifry} alt='' />
			</div>
			<div
				className={`${st.dashboard} ${
					location.pathname === '/' ? st.active : ''
				}`}
				onClick={() => navigate('/')}
			>
				<img src={dashboard} alt='' />
				<p className={st.nameDashboard}>Dashboard</p>
			</div>
			<div
				className={`${st.dashboard} ${
					location.pathname === '/analytics' ? st.active : ''
				}`}
				onClick={() => navigate('/analytics')}
			>
				<img src={Analytics} alt='' />
				<p className={st.nameAnalytics}>Analytics</p>
			</div>
			<div
				className={`${st.dashboard} ${
					location.pathname === '/my-wallet' ? st.active : ''
				}`}
				onClick={() => navigate('/my-wallet')}
			>
				<img src={MyWallet} alt='' />
				<p className={st.nameMyWallet}>My Wallet</p>
			</div>

			<div className={st.line}></div>
			<div className={st.dashboard}>
				<img src={Moon} alt='' />
				<p className={st.nameSetting}>Dark Mode</p>
			</div>
		</div>
	)
}
