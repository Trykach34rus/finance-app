import classNames from 'classnames'
import { useState } from 'react'
import other from '../../../ProgectFoto/other.svg'
import payments from '../../../ProgectFoto/payments.svg'
import percent from '../../../ProgectFoto/percent.svg'
import request from '../../../ProgectFoto/request.svg'
import { addIncome } from '../../../redux/slices/dashboardReducer.ts'
import { useAppDispatch } from '../../../redux/store.ts'
import { IncomeModalProps } from '../../../types.ts'
import st from './incomeModals.module.scss'

export default function IncomeModals({
	onClose,
	isIncomeModalOpen,
}: IncomeModalProps) {
	const dispatch = useAppDispatch()

	const [income, setIncome] = useState<string>('')
	const [description, setDescription] = useState<string>('')
	const [enteredDateDay, setEnteredDateDay] = useState<string>('')
	const [enteredDateMonth, setEnteredDateMonth] = useState<string>('')
	const [enteredDateYear, setEnteredDateYear] = useState<string>('')
	const [selectedCategory, setSelectedCategogy] = useState<string>('')

	function handleCategorySelect(category: string) {
		setSelectedCategogy(category)
	}

	function handleSubmit(): void {
		const day = enteredDateDay || new Date().getDate().toString()
		const month = enteredDateMonth || (new Date().getMonth() + 1).toString()
		const year = enteredDateYear || new Date().getFullYear().toString()
		if ((+income > 0 && description) || selectedCategory) {
			const formattedDate = `${day}-${month}-${year}`
			dispatch(
				addIncome({
					amount: +income,
					description: `${description} ${selectedCategory}`,
					date: formattedDate,
				})
			)
			onClose()
		}
	}

	return (
		<div className={st.root}>
			<div
				className={isIncomeModalOpen ? classNames(st.modal, st.open) : st.modal}
			>
				<div className={st.modalContent}>
					<h2>Add Income</h2>
					<input
						type='text'
						value={income}
						onChange={e => setIncome(e.target.value)}
						placeholder='amount'
					/>
					<input
						type='text'
						value={description}
						onChange={e => setDescription(e.target.value)}
						placeholder='description'
					/>
					<div className={st.dateInputs}>
						<input
							type='text'
							value={enteredDateDay}
							onChange={e => setEnteredDateDay(e.target.value)}
							placeholder='day'
						/>
						<input
							type='text'
							value={enteredDateMonth}
							onChange={e => setEnteredDateMonth(e.target.value)}
							placeholder='month'
						/>
						<input
							type='text'
							value={enteredDateYear}
							onChange={e => setEnteredDateYear(e.target.value)}
							placeholder='year'
						/>
					</div>
					<div className={st.activitysContainer}>
						<div className={st.activitys}>
							<button
								className={st.activityImg}
								onClick={() => handleCategorySelect('Salary')}
							>
								<img src={payments} />
							</button>
							<p className={st.activityTitle}>Salary</p>
						</div>
						<div className={st.activitys}>
							<button
								className={st.activityImg}
								onClick={() => handleCategorySelect('interestOnDeposits')}
							>
								<img src={percent} />
							</button>
							<p className={st.activityTitle}>Interest On Deposits</p>
						</div>
						<div className={st.activitys}>
							<button
								className={st.activityImg}
								onClick={() => handleCategorySelect('Investment')}
							>
								<img src={request} />
							</button>
							<p className={st.activityTitle}>Investment</p>
						</div>
						<div className={st.activitys}>
							<button
								className={st.activityImg}
								onClick={() => handleCategorySelect('Other')}
							>
								<img src={other} />
							</button>
							<p className={st.activityTitle}>Other</p>
						</div>
					</div>
					<button className={st.addIncome} onClick={handleSubmit}>
						Add Income
					</button>
					<button className={st.close} onClick={onClose}>
						Close
					</button>
				</div>
			</div>
		</div>
	)
}
