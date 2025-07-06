import { useAppSelector } from '../../redux/store.ts'
import { TransactionEnum } from '../../types.ts'
import st from './Transaction.module.scss'
export default function Transaction() {
	const transactions = useAppSelector(state => state.dashboard.transactions)

	return (
		<div className={st.root}>
			<h2 className={st.title}>Transaction</h2>
			<ul className={st.transactionList}>
				{transactions.map((transaction, index) => (
					<li
						key={index}
						className={`${st.transactionItem} ${
							transaction.type === TransactionEnum.Outcome
								? st.outcome
								: st.income
						}`}
					>
						<span className={st.description}>{transaction.description}</span>
						<span className={st.date}>{transaction.date}</span>
						<span className={st.amount}>{transaction.amount} $</span>
					</li>
				))}
			</ul>
		</div>
	)
}
