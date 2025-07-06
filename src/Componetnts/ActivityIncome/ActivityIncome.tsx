import other from '../../ProgectFoto/other.svg'
import payments from '../../ProgectFoto/payments.svg'
import percent from '../../ProgectFoto/percent.svg'
import request from '../../ProgectFoto/request.svg'
import { CategorAmountActivityProps } from '../../types'
import st from './ActivityIncome.module.scss'

export default function ActivityIncome({
	amounts,
}: CategorAmountActivityProps) {
	return (
		<div className={st.root}>
			<p className={st.title}>Income</p>
			<div className={st.activitysContainer}>
				<div className={st.activitys}>
					<div className={st.activityImg}>
						<img src={payments} />
					</div>
					<p className={st.activityTitle}>Salary: ${amounts.salary}</p>
				</div>
				<div className={st.activitys}>
					<div className={st.activityImg}>
						<img src={percent} />
					</div>
					<p className={st.activityTitle}>
						Interest On Deposits: ${amounts.interestOnDeposits}{' '}
					</p>
				</div>
				<div className={st.activitys}>
					<div className={st.activityImg}>
						<img src={request} />
					</div>
					<p className={st.activityTitle}>Investmen: ${amounts.investmen} </p>
				</div>
				<div className={st.activitys}>
					<div className={st.activityImg}>
						<img src={other} />
					</div>
					<p className={st.activityTitle}>Other: ${amounts.other} </p>
				</div>
			</div>
		</div>
	)
}
