export enum TransactionEnum {
	Income = 'income',
	Outcome = 'outcome',
}
export enum CardTypes {
	Visa = 'Visa',
	MasterCard = 'Master Card',
	PayPal = 'Pay Pal',
}
export interface ObjectLiteral {
	[key: string]: React.ReactNode | string
}
export type Card = {
	id: number
	bankName: string
	firstField: string
	secondField: string
	thirdField: string
	fourthField: string
	cardDateMonth: string
	cardDateYear: string
	cardholderName: string
	cardManufacturingCompany: string
	balance: number
}
export type TransactionType = {
	amount: number
	description: string
	date: string
	type: TransactionEnum
}
export type DashboardProps = {
	totalIncome: number
	totalOutcome: number
	myCard: number
	cards: Card[]
	transactions: TransactionType[]
	onAddIncome: (amount: number, description: string) => void
	onAddOutcome: (amount: number, description: string) => void
	addNewCard: (
		bankName: string,
		firstField: string,
		secondField: string,
		thirdField: string,
		fourthField: string,
		cardDateMonth: string,
		cardDateYear: string,
		cardholderName: string,
		cardManufacturingCompany: string
	) => void
}
export type OutcomeProps = {
	totalOutcome: number
	onAddOutcome: (amount: number, description: string, date: string) => void
}
export type IncomeProps = {
	totalIncome: number
	onAddIncome: (amount: number, description: string, date: string) => void
}
export type MyCardProps = {
	currentCard: Card
	onAddNewCard: (
		bankName: string,
		firstField: string,
		secondField: string,
		thirdField: string,
		fourthField: string,
		cardDateMonth: string,
		cardDateYear: string,
		cardholderName: string,
		cardManufacturingCompany: string
	) => void
	cards: Card[]
	currentCardIndex: number
	onNextCard: () => void
	onLastCard: () => void
}
export type OutcomeModalProps = {
	onClose: () => void
	onAddOutcome: (amount: number, description: string, date: string) => void
	isOutcomeModalOpen: boolean
}
export type IncomeModalProps = {
	onClose: () => void
	onAddIncome: (amount: number, description: string, date: string) => void
	isIncomeModalOpen: boolean
}
export type AddNewCardModalProps = {
	onClose: () => void
	onAddNewCard: (
		bankName: string,
		firstField: string,
		secondField: string,
		thirdField: string,
		fourthField: string,
		cardDateMonth: string,
		cardDateYear: string,
		cardholderName: string,
		cardManufacturingCompany: string
	) => void
	isAddNewCardModalOpen: boolean
	Card: Card[]
}
export type CategoryAmounts = {
	rentalHousing: number
	health: number
	eat: number
	fastFood: number
	hobby: number
	other: number
	salary: number
	interestOnDeposits: number
	investmen: number
}
export type CategorAmountActivityProps = {
	amounts: {
		rentalHousing: number
		health: number
		eat: number
		fastFood: number
		hobby: number
		salary: number
		interestOnDeposits: number
		investmen: number
		other: number
	}
}
export type TransactionProps = {
	transactions: {
		amount: number
		description: string
		date: string
		type: TransactionEnum
	}[]
}

export type CategoryDream = {
	car: number
	privateHousing: number
	journey: number
	wedding: number
	study: number
	bisnes: number
}
