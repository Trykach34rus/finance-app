import { useState } from 'react'
import arrow_upward from '../../ProgectFoto/arrow_upward.svg'
import { addOutcome } from '../../redux/slices/dashboardReducer.ts'
import { useAppDispatch, useAppSelector } from '../../redux/store.ts'
import OutcomeModals from '../Modals/OutcomeModals/outcomeModals.tsx'
import st from './TotalOutcome.module.scss'

export default function TotalOutcome() {
	const dispatch = useAppDispatch()
	const totalOutcome = useAppSelector(state => state.dashboard.totalOutcome)

	const [isOutcomeModalOpen, setOutcomeModalOpen] = useState<boolean>(false)

	function handleOpenOutcomeModal(): void {
		setOutcomeModalOpen(true)
	}
	function handleCloseOutcomeModal(): void {
		setOutcomeModalOpen(false)
	}
	function handleAddOutcome(amount: number, description: string, date: string) {
		dispatch(addOutcome({ amount, description, date }))
		handleCloseOutcomeModal()
	}

	return (
		<div className={st.root}>
			<button className={st.arrow} onClick={handleOpenOutcomeModal}>
				<img src={arrow_upward} alt='' />
			</button>
			<div className={st.titleAndDescription}>
				<p className={st.title}>Total Outcome</p>
				<p className={st.description}>{'$' + totalOutcome.toFixed(2)}</p>
			</div>
			<div className={st.percentContainer}>
				<p className={st.percent}>-1.29%</p>
			</div>
			{isOutcomeModalOpen && (
				<OutcomeModals
					onClose={handleCloseOutcomeModal}
					onAddOutcome={handleAddOutcome}
					isOutcomeModalOpen={isOutcomeModalOpen}
				/>
			)}
		</div>
	)
}
