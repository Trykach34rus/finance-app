import { useState } from 'react'
import Bisnes from '../../ProgectFoto/Bisnes.svg'
import Car from '../../ProgectFoto/Car.svg'
import Journey from '../../ProgectFoto/Journey.svg'
import PrivateHousing from '../../ProgectFoto/Private_Housing.svg'
import Study from '../../ProgectFoto/Study.svg'
import Wedding from '../../ProgectFoto/Wedding.svg'
import { useAppSelector } from '../../redux/store'
import { CategoryDream, ObjectLiteral } from '../../types'
import SavingsOnDreamModal from '../Modals/SavingsOnDreamModal/SavingsOnDreamModal'
import st from './SavingsOnDream.module.scss'

export default function SavingsOnDream() {
	const addDream = useAppSelector(state => state.myWalet.categoryDream)
	console.log(addDream)
	const dreamKeys = Object.keys(addDream)

	const [isOpen, setIsOpen] = useState<boolean>(false)

	const addImageIcon: ObjectLiteral = {
		car: Car,
		privateHousing: PrivateHousing,
		journey: Journey,
		wedding: Wedding,
		study: Study,
		bisnes: Bisnes,
	}

	function handleOpenSalvingDream() {
		setIsOpen(true)
	}
	function handleCloseSalvingDream() {
		setIsOpen(false)
	}

	return (
		<div className={st.root}>
			<p className={st.title}>Savings On a Dream</p>
			{dreamKeys.map(key => {
				if (addDream[key as keyof CategoryDream]) {
					return (
						<div className={st.selectedDream}>
							<img src={addImageIcon[key] as string} alt={key} />
							<p>Amount: {addDream[key as keyof CategoryDream]}</p>
						</div>
					)
				}
			})}

			<button className={st.addDream} onClick={handleOpenSalvingDream}>
				Add Dream
			</button>
			<SavingsOnDreamModal
				isDreamModalOpen={isOpen}
				onClose={handleCloseSalvingDream}
			/>
		</div>
	)
}
