import { useState } from 'react'
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from 'react-icons/fa'
import { addNewCard } from '../../redux/slices/dashboardReducer.ts'
import { useAppDispatch, useAppSelector } from '../../redux/store.ts'
import { Card, CardTypes, MyCardProps, ObjectLiteral } from '../../types.ts'
import AddNewCardModals from '../Modals/AddNewCardModals/addNewCardModals.tsx'
import st from './MyCard.module.scss'

export default function MyCard({ onNextCard, onLastCard }: MyCardProps) {
	const dispatch = useAppDispatch()
	const { cards, allCardBalance, currentCardIndex } = useAppSelector(
		state => state.dashboard
	)
	const [isAddNewCardModalOpen, setIsAddNewCardModalOpen] =
		useState<boolean>(false)

	const card = cards[currentCardIndex]
	const cardManufacturingIcon: ObjectLiteral = {
		Visa: <FaCcVisa color='black' size={'50px'} />,
		MasterCard: <FaCcMastercard color='black' size={'50px'} />,
		PayPal: <FaCcPaypal color='black' size={'50px'} />,
	}

	function handleOpenAddNewCardModal(): void {
		setIsAddNewCardModalOpen(true)
	}

	function handleCloseAddNewCardModal(): void {
		setIsAddNewCardModalOpen(false)
	}
	function handleAddNewCard(
		bankName: string,
		firstField: string,
		secondField: string,
		thirdField: string,
		fourthField: string,
		cardDateMonth: string,
		cardDateYear: string,
		cardholderName: string,
		cardManufacturingCompany: string
	): void {
		const newCard: Card = {
			id: Date.now(),
			bankName,
			firstField,
			secondField,
			thirdField,
			fourthField,
			cardDateMonth,
			cardDateYear,
			cardholderName,
			cardManufacturingCompany,
			balance: 0,
		}
		dispatch(addNewCard(newCard))
		handleCloseAddNewCardModal()
	}
	console.log(allCardBalance)

	return (
		<div className={st.root}>
			<p className={st.title}>My Card</p>
			<p className={st.cardsBalansTitle}>Card Balance</p>
			<p className={st.cardsBalans}>${allCardBalance.toFixed(2)}</p>

			{card && (
				<div className={st.cardContainer}>
					<div className={st.nameAndLogo}>
						<p className={st.cardBalansTitle}>Current Balance</p>
					</div>
					<div className={st.balansAndBanckName}>
						<p className={st.cardBalans}>${card.balance.toFixed(2)}</p>
						<div className={st.banckNameContainer}>
							<p className={st.banckName}>{card.bankName}</p>
						</div>
					</div>
					<div className={st.cardNumber}>
						<div>
							<p>
								{card.firstField} {card.secondField} {card.thirdField}{' '}
								{card.fourthField}
							</p>
						</div>
					</div>
					<div className={st.cardDateContainer}>
						<div>
							<div className={st.cardDate}>
								<p className={st.cardDateMonth}>{card.cardDateMonth}/</p>
								<p className={st.cardDateYear}>{card.cardDateYear}</p>
							</div>
							<p className={st.cardholderName}>{card.cardholderName}</p>
						</div>

						<div className={st.cardManufacturingCompany}>
							<div>
								<div className={st.cardManufacturingCompanyDetails}>
									{
										cardManufacturingIcon[
											card.cardManufacturingCompany as CardTypes
										]
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			<div className={st.buttons}>
				<button className={st.buttonNext} onClick={onNextCard}>
					Next
				</button>
				<button className={st.buttonLast} onClick={onLastCard}>
					Last
				</button>
			</div>
			<button className={st.button} onClick={handleOpenAddNewCardModal}>
				Add New Card
			</button>
			{isAddNewCardModalOpen && (
				<AddNewCardModals
					onClose={handleCloseAddNewCardModal}
					onAddNewCard={handleAddNewCard}
					isAddNewCardModalOpen={isAddNewCardModalOpen}
					Card={cards}
				/>
			)}
		</div>
	)
}
