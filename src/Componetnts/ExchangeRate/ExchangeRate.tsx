import { useEffect } from 'react'
import { getCurrency } from '../../redux/slices/myWaletReducer'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import st from './ExchangeRate.module.scss'

export default function ExchangeRate() {
	const dispatch = useAppDispatch()
	const { rates } = useAppSelector(state => state.myWalet)

	useEffect(() => {
		dispatch(getCurrency())
	}, [dispatch])

	return (
		<div className={st.root}>
			<p className={st.title}>Exchange rate</p>
			<ul>
				{Object.entries(rates)
					.slice(0, 9)
					.map(([currency, rate]) => (
						<li key={currency}>
							{currency}:{rate}
						</li>
					))}
			</ul>
		</div>
	)
}
