import '../App.scss'
import ActivityIncome from '../Componetnts/ActivityIncome/ActivityIncome.tsx'
import ActivityOutcome from '../Componetnts/ActivityOutcome/ActivityOutcome.tsx'
import CardInfo from '../Componetnts/CardInfo/CardInfo.tsx'
import ExchangeRate from '../Componetnts/ExchangeRate/ExchangeRate.tsx'
import MyWaletIncomeAndOutcome from '../Componetnts/MyWaletIncomeAndOutcome/MyWaletIncomeAndOutcome.tsx'
import News from '../Componetnts/News/News.tsx'
import SavingsOnDream from '../Componetnts/SavingsOnDream/SavingsOnDream.tsx'
import { useAppSelector } from '../redux/store'

export default function MyWallet() {
	const categoryAmounts = useAppSelector(
		state => state.dashboard.categoryAmounts
	)
	return (
		<div className='mainContainer'>
			<div className='myWalletContainer'>
				<CardInfo />
				<div className='outcomeAndIncome'>
					<div className='totalAndIncome'>
						<ActivityIncome amounts={categoryAmounts} />
						<MyWaletIncomeAndOutcome />
					</div>
					<ActivityOutcome amounts={categoryAmounts} />
				</div>
			</div>
			<div className='secondaryContainer'>
				<ExchangeRate />
				<SavingsOnDream />
				<News />
			</div>
		</div>
	)
}
