import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import {
	Card,
	CategoryAmounts,
	TransactionEnum,
	TransactionType,
} from '../../types'

interface DashboardState {
	totalIncome: number
	totalOutcome: number
	currentCardIndex: number
	allCardBalance: number
	cards: Card[]
	transactions: TransactionType[]
	categoryAmounts: CategoryAmounts
}

const initialState: DashboardState = {
	totalIncome: 0,
	totalOutcome: 0,
	allCardBalance: 0,
	currentCardIndex: 0,
	cards: [],
	transactions: [],
	categoryAmounts: {
		rentalHousing: 0,
		health: 0,
		eat: 0,
		fastFood: 0,
		hobby: 0,
		other: 0,
		salary: 0,
		interestOnDeposits: 0,
		investmen: 0,
	},
}

export const dashboardSlice = createSlice({
	name: 'dashboard',
	initialState,
	reducers: {
		addIncome: (
			state,
			action: PayloadAction<{
				amount: number
				description: string
				date: string
			}>
		) => {
			const { amount, description, date } = action.payload
			const currentCard = state.cards[state.currentCardIndex]
			if (currentCard) {
				currentCard.balance += amount
				state.totalIncome += amount
				state.allCardBalance += amount
				state.transactions.push({
					amount,
					description,
					date,
					type: TransactionEnum.Income,
				})
				if (description.includes('Salary')) {
					state.categoryAmounts.salary += amount
				} else if (description.includes('Interest On Deposits')) {
					state.categoryAmounts.interestOnDeposits += amount
				} else if (description.includes('Investment')) {
					state.categoryAmounts.investmen += amount
				} else {
					state.categoryAmounts.other += amount
				}
			}
		},
		addOutcome: (
			state,
			action: PayloadAction<{
				amount: number
				description: string
				date: string
			}>
		) => {
			const { amount, description, date } = action.payload
			const currentCard = state.cards[state.currentCardIndex]
			if (currentCard) {
				currentCard.balance -= amount
				state.totalOutcome -= amount
				state.allCardBalance -= amount
				state.transactions.push({
					amount,
					description,
					date,
					type: TransactionEnum.Outcome,
				})
				if (description.includes('Rental housing')) {
					state.categoryAmounts.rentalHousing += amount
				} else if (description.includes('Health')) {
					state.categoryAmounts.health += amount
				} else if (description.includes('Eat')) {
					state.categoryAmounts.eat += amount
				} else if (description.includes('Fast food')) {
					state.categoryAmounts.fastFood += amount
				} else if (description.includes('Hobby')) {
					state.categoryAmounts.hobby += amount
				} else {
					state.categoryAmounts.other += amount
				}
			}
		},
		addNewCard: (state, action: PayloadAction<Card>) => {
			state.cards.push(action.payload)
			state.currentCardIndex = state.cards.length - 1
		},
		nextCard: state => {
			if (state.currentCardIndex < state.cards.length - 1) {
				state.currentCardIndex += 1
			}
		},
		lastCard: state => {
			if (state.currentCardIndex > 0) {
				state.currentCardIndex -= 1
			}
		},
		addTransaction: (state, action: PayloadAction<TransactionType>) => {
			state.transactions.push(action.payload)
			if (action.payload.type === TransactionEnum.Income) {
				state.totalIncome += action.payload.amount
			} else if (action.payload.type === TransactionEnum.Outcome) {
				state.totalOutcome += action.payload.amount
			}
		},
	},
})

export const {
	addIncome,
	addOutcome,
	addNewCard,
	nextCard,
	lastCard,
	addTransaction,
} = dashboardSlice.actions
export default dashboardSlice.reducer
