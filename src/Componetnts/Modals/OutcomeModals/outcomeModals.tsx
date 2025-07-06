import classNames from 'classnames'
import { useState } from 'react'
import Eat from '../../../ProgectFoto/Eat.svg'
import fast_food from '../../../ProgectFoto/fast_food.svg'
import health from '../../../ProgectFoto/health.svg'
import hobby from '../../../ProgectFoto/hobby.svg'
import house from '../../../ProgectFoto/house.svg'
import other from '../../../ProgectFoto/other.svg'
import { addOutcome } from '../../../redux/slices/dashboardReducer.ts'
import { useAppDispatch } from '../../../redux/store.ts'
import { OutcomeModalProps } from '../../../types.ts'
import st from './otcomeModals.module.scss'

export default function OutcomeModals({
	onClose,
	isOutcomeModalOpen,
}: OutcomeModalProps) {
	const dispatch = useAppDispatch()

	const [outcome, setOutcome] = useState<string>('')
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

		if ((+outcome > 0 && description) || selectedCategory) {
			const formattedDate = `${day}-${month}-${year}`
			dispatch(
				addOutcome({
					amount: +outcome,
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
				className={
					isOutcomeModalOpen ? classNames(st.modal, st.open) : st.modal
				}
			>
				<div className={st.modalContent}>
					<h2>Add Outcome</h2>
					<input
						type='text'
						value={outcome}
						onChange={e => setOutcome(e.target.value)}
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
								onClick={() => handleCategorySelect('Rental housing')}
							>
								<img src={house} />
							</button>
							<p className={st.activityTitle}>Rental housing</p>
						</div>
						<div className={st.activitys}>
							<button
								className={st.activityImg}
								onClick={() => handleCategorySelect('Health')}
							>
								<img src={health} />
							</button>
							<p className={st.activityTitle}>Health</p>
						</div>
						<div className={st.activitys}>
							<button
								className={st.activityImg}
								onClick={() => handleCategorySelect('Eat')}
							>
								<img src={Eat} />
							</button>
							<p className={st.activityTitle}>Eat</p>
						</div>
						<div className={st.activitys}>
							<button
								className={st.activityImg}
								onClick={() => handleCategorySelect('Fast food')}
							>
								<img src={fast_food} />
							</button>
							<p className={st.activityTitle}>Fast food</p>
						</div>
						<div className={st.activitys}>
							<button
								className={st.activityImg}
								onClick={() => handleCategorySelect('Hobby')}
							>
								<img src={hobby} />
							</button>
							<p className={st.activityTitle}>Hobby</p>
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

					<button className={st.addOutcome} onClick={handleSubmit}>
						Add Outcome
					</button>
					<button className={st.close} onClick={onClose}>
						Close
					</button>
				</div>
			</div>
		</div>
	)
}
