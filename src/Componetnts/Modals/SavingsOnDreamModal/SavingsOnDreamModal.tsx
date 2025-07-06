import classNames from 'classnames'
import { useState } from 'react'
import Bisnes from '../../../ProgectFoto/Bisnes.svg'
import Car from '../../../ProgectFoto/Car.svg'
import Journey from '../../../ProgectFoto/Journey.svg'
import Private_Housing from '../../../ProgectFoto/Private_Housing.svg'
import Study from '../../../ProgectFoto/Study.svg'
import Wedding from '../../../ProgectFoto/Wedding.svg'
import { addAmountOfDream } from '../../../redux/slices/myWaletReducer'
import { useAppDispatch } from '../../../redux/store'
import st from './SavingsOnDreamModal.module.scss'

type Props = {
	onClose: () => void
	isDreamModalOpen: boolean
}

export default function SavingsOnDreamModal({
	isDreamModalOpen,
	onClose,
}: Props) {
	const dispatch = useAppDispatch()
	const [income, setIncome] = useState<string>('')
	const [selectedCategory, setSelectedCategogy] = useState<string>('')

	function handleCategorySelect(category: string) {
		setSelectedCategogy(category)
	}

	function handleSubmit() {
		if (+income > 0 && selectedCategory) {
			dispatch(
				addAmountOfDream({
					amount: +income,
					description: `${selectedCategory}`,
				})
			)
		}

		onClose()
	}

	return (
		<div className={st.root}>
			<div className={classNames(st.modal, { [st.open]: isDreamModalOpen })}>
				<div className={st.modalContent}>
					<p className={st.title}>Savings On a Dream</p>
					<input
						type='text'
						placeholder='Add Amount'
						onChange={e => setIncome(e.target.value)}
						value={income}
					/>
					<div className={st.activitysContainer}>
						<div className={st.activitys}>
							<button
								className={st.activityImg}
								onClick={() => handleCategorySelect('Car')}
							>
								<img src={Car} />
							</button>
							<p className={st.activityTitle}>Car</p>
						</div>
						<div className={st.activitys}>
							<button
								className={st.activityImg}
								onClick={() => handleCategorySelect('Private Housing')}
							>
								<img src={Private_Housing} />
							</button>
							<p className={st.activityTitle}>Private Housing</p>
						</div>
						<div className={st.activitys}>
							<button
								className={st.activityImg}
								onClick={() => handleCategorySelect('Journey')}
							>
								<img src={Journey} />
							</button>
							<p className={st.activityTitle}>Journey</p>
						</div>
						<div className={st.activitys}>
							<button
								className={st.activityImg}
								onClick={() => handleCategorySelect('Wedding')}
							>
								<img src={Wedding} />
							</button>
							<p className={st.activityTitle}>Wedding</p>
						</div>
						<div className={st.activitys}>
							<button
								className={st.activityImg}
								onClick={() => handleCategorySelect('Study')}
							>
								<img src={Study} />
							</button>
							<p className={st.activityTitle}>Study</p>
						</div>
						<div className={st.activitys}>
							<button
								className={st.activityImg}
								onClick={() => handleCategorySelect('Bisnes')}
							>
								<img src={Bisnes} />
							</button>
							<p className={st.activityTitle}>Business</p>
						</div>
					</div>

					<div className={st.buttonContainer}>
						<button className={st.addButton} onClick={handleSubmit}>
							Add Amount
						</button>
						<button className={st.closeButton} onClick={onClose}>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
