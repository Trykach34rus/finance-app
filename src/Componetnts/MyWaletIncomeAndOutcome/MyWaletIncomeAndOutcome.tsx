import { useAppSelector } from '../../redux/store'
import st from './MyWaletIncomeAndOutcome.module.scss'

export default function MyWaletIncomeAndOutcome() {
	const { totalIncome, totalOutcome } = useAppSelector(state => state.dashboard)
	return (
		<div className={st.root}>
			<p>{'Total Income: $' + totalIncome.toFixed(2)}</p>
			<p>{'Total Outcome: $' + totalOutcome.toFixed(2)}</p>
		</div>
	)
}
