import { ApexOptions } from 'apexcharts'
import React, { useEffect } from 'react'
import ReactApexChart from 'react-apexcharts'
import { useAppSelector } from '../redux/store'

export default function Analytics() {
	const transactions = useAppSelector(state => state.dashboard.transactions)

	function getAmount(type: 'income' | 'outcome') {
		return transactions.reduce(
			(acc: Record<string, number>, item) => {
				if (item.type === type) {
					const month = new Date(
						`${item.date.slice(-4)}-${item.date.slice(3, 5)}-${item.date.slice(
							0,
							2
						)}`
					)
						.getMonth()
						.toString()
					acc[month] += item.amount
				}
				return acc
			},
			{
				'0': 0,
				'1': 0,
				'2': 0,
				'3': 0,
				'4': 0,
				'5': 0,
				'6': 0,
				'7': 0,
				'8': 0,
				'9': 0,
				'10': 0,
				'11': 0,
			}
		)
	}
	const data = {
		series: [
			{
				name: 'Income',
				data: Object.values(getAmount('income')),
			},
			{
				name: 'Outcome',
				data: Object.values(getAmount('outcome')),
			},
		],
		options: {
			chart: {
				type: 'bar',
				height: 350,
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '55%',
					borderRadius: 5,
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				show: true,
				width: 2,
				colors: ['transparent'],
			},
			xaxis: {
				categories: [
					'Jen',
					'Feb',
					'Mar',
					'Apr',
					'May',
					'Jun',
					'Jul',
					'Aug',
					'Sep',
					'Oct',
					'Nov',
					'Dec',
				],
			},
			yaxis: {
				title: {
					text: '$ (thousands)',
				},
			},
			fill: {
				opacity: 1,
			},
			tooltip: {
				y: {
					formatter: function (val: number) {
						return '$ ' + val + ' thousands'
					},
				},
			},
			colors: ['rgb(23, 167, 23)', 'rgba(239, 4, 4)'],
		},
	}

	const [state, setState] = React.useState(data)
	useEffect(() => {
		setState(data)
	}, [transactions])

	return (
		<div>
			<div id='chart'>
				<ReactApexChart
					options={state.options as ApexOptions}
					series={state.series}
					type='bar'
					height={350}
				/>
			</div>
			<div id='html-dist'></div>
		</div>
	)
}
