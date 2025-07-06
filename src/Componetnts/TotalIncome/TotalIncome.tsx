import { useState } from 'react'
import arrow_downward from '../../ProgectFoto/arrow_downward.svg'
import { addIncome } from '../../redux/slices/dashboardReducer.ts'
import { useAppDispatch, useAppSelector } from '../../redux/store.ts'
import IncomeModals from '../Modals/IncomeModals/IncomeModals.tsx'
import st from './TotalIncome.module.scss'

export default function TotalIncome() {
	const dispatch = useAppDispatch()
	const totalIncome = useAppSelector(state => state.dashboard.totalIncome)

	const [isIncomeModalOpen, setIncomeModalOpen] = useState<boolean>(false)

	function handleOpenIncomeModal(): void {
		setIncomeModalOpen(true)
	}
	function handleCloseIncomeModal(): void {
		setIncomeModalOpen(false)
	}
	function handleAddIncome(amount: number, description: string, date: string) {
		dispatch(addIncome({ amount, description, date }))
		handleCloseIncomeModal()
	}
	return (
		<div className={st.root}>
			<button className={st.arrow} onClick={handleOpenIncomeModal}>
				<img src={arrow_downward} alt='' />
			</button>
			<div className={st.titleAndDescription}>
				<p className={st.title}>Total Income</p>
				<p className={st.description}>{'$' + totalIncome.toFixed(2)}</p>
			</div>
			<div className={st.percentContainer}>
				<p className={st.percent}>+1.29%</p>
			</div>
			{isIncomeModalOpen && (
				<IncomeModals
					onClose={handleCloseIncomeModal}
					onAddIncome={handleAddIncome}
					isIncomeModalOpen={isIncomeModalOpen}
				/>
			)}
		</div>
	)
}
