import { useState } from 'react'
import '../App.scss'
import Activity from '../Componetnts/Activity/Activity.tsx'
import Analytics from '../Componetnts/Analytics/Analytics.tsx'
import ChatModals from '../Componetnts/Modals/ChatModals/ChatModals.tsx'
import MyCard from '../Componetnts/MyCard/MyCard.tsx'
import TotalIncome from '../Componetnts/TotalIncome/TotalIncome.tsx'
import TotalOutcome from '../Componetnts/TotalOutcome/TotalOutcome.tsx'
import Transaction from '../Componetnts/Transaction/Transaction.tsx'
import support_agent from '../ProgectFoto/support_agent.svg'
import {
	addNewCard,
	lastCard,
	nextCard,
} from '../redux/slices/dashboardReducer.ts'
import { useAppDispatch, useAppSelector } from '../redux/store.ts'
import { Card } from '../types.ts'

function Dashboard() {
	const [isChatOpen, setIsChatOpen] = useState<boolean>(false)
	const dispatch = useAppDispatch()
	const { cards, currentCardIndex } = useAppSelector(state => state.dashboard)
	const currentCard = cards[currentCardIndex] || null
	//const currentDate = new Date().toLocaleDateString()

	function handleSubmit(
		bankName: string,
		firstField: string,
		secondField: string,
		thirdField: string,
		fourthField: string,
		cardDateMonth: string,
		cardDateYear: string,
		cardholderName: string,
		cardManufacturingCompany: string
	) {
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
	}
	function handleNextCard() {
		dispatch(nextCard())
	}
	function handleLastCard() {
		dispatch(lastCard())
	}
	function chatOpen() {
		setIsChatOpen(true)
	}
	function chatClose() {
		setIsChatOpen(false)
	}

	return (
		<div className='app-container'>
			<div>
				<div className='total'>
					<TotalIncome />
					<TotalOutcome />
				</div>
				<div>
					<Analytics />
					<Transaction />
				</div>
			</div>
			<div>
				<Activity />
				<MyCard
					onAddNewCard={handleSubmit}
					cards={cards}
					currentCardIndex={currentCardIndex}
					onNextCard={handleNextCard}
					onLastCard={handleLastCard}
					currentCard={currentCard}
				/>
			</div>
			<button className='supportAgent' onClick={chatOpen}>
				<img src={support_agent} />
			</button>
			<ChatModals isOpenChat={isChatOpen} onClose={chatClose} />
		</div>
	)
}
export default Dashboard
