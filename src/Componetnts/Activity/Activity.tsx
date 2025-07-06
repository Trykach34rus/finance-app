import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { useAppSelector } from '../../redux/store'
import st from './Activity.module.scss'

export default function Activity() {
	const transactions = useAppSelector(state => state.dashboard.transactions)
	console.log(transactions)
	const outcomeData = transactions.reduce(
		(acc: Record<string, number>, item) => {
			if (item.type === 'outcome') {
				acc[item.description.trim()] += item.amount
			}
			return acc
		},
		{
			'Rental housing': 0,
			Health: 0,
			Eat: 0,
			'Fast food': 0,
			Hobby: 0,
			Other: 0,
		}
	)
	const state = {
		series: Object.values(outcomeData),
		options: {
			chart: {
				type: 'donut',
			},
			colors: ['#FF4560', '#008FFB', '#00E396', '#775DD0', '#FEB019'],
			legend: {
				labels: {
					colors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff'], // Цвета лейблов
				},
				position: 'right',
			},
			labels: Object.keys(outcomeData),
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200,
						},
						legend: {
							position: 'bottom',
						},
					},
				},
			],
		},
	}
	return (
		<div className={st.root}>
			<p className={st.title}>Activity</p>
			<div className={st.chartСontainer}>
				<ReactApexChart
					options={state.options as ApexOptions}
					series={state.series}
					type='donut'
				/>
			</div>
			<div id='html-dist'></div>
		</div>
	)
}
