import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import classNames from 'classnames'
import { useState } from 'react'
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from 'react-icons/fa'
import { addNewCard } from '../../../redux/slices/dashboardReducer.ts'
import { useAppDispatch } from '../../../redux/store.ts'
import { AddNewCardModalProps, Card, CardTypes } from '../../../types.ts'
import st from './addNewCardModals.module.scss'

export default function AddNewCardModals({
	onClose,
	isAddNewCardModalOpen,
}: AddNewCardModalProps) {
	const dispatch = useAppDispatch()

	const [bankName, setBankName] = useState<string>('')
	const [firstField, setFirstField] = useState<string>('')
	const [secondField, setSecondField] = useState<string>('')
	const [thirdField, setThirdField] = useState<string>('')
	const [fourthField, setFourthField] = useState<string>('')
	const [cardDateMonth, setCardDateMonth] = useState<string>('')
	const [cardDateYear, setCardDateYear] = useState<string>('')
	const [cardholderName, setCardholderName] = useState<string>('')
	const [cardManufacturingCompany, setCardManufacturingCompany] =
		useState<string>('')

	function handleSubmitNewCard() {
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
		onClose()
	}

	return (
		<div className={st.root}>
			<div
				className={
					isAddNewCardModalOpen
						? classNames(st.modalContaine, st.open)
						: st.modalContaine
				}
			>
				<div className={st.modalContainer}>
					<input
						type='text'
						value={bankName}
						onChange={e => setBankName(e.target.value)}
						placeholder='Bank name'
						className={st.bankNameInput}
					/>
					<div className={st.cardNumberContainer}>
						<input
							type='text'
							value={firstField}
							onChange={e => setFirstField(e.target.value)}
							placeholder='first fild'
							className={st.field}
							maxLength={4}
						/>
						<input
							type='text'
							value={secondField}
							onChange={e => setSecondField(e.target.value)}
							placeholder='second fild'
							className={st.field}
							maxLength={4}
						/>
						<input
							type='text'
							value={thirdField}
							onChange={e => setThirdField(e.target.value)}
							placeholder='third fild'
							className={st.field}
							maxLength={4}
						/>
						<input
							type='text'
							value={fourthField}
							onChange={e => setFourthField(e.target.value)}
							placeholder='fourth fild'
							className={st.field}
							maxLength={4}
						/>
					</div>
					<div className={st.dateAndNameAndLogoContainer}>
						<div className={st.dateAndNameContainer}>
							<div className={st.dateContainer}>
								<input
									type='text'
									value={cardDateMonth}
									onChange={e => setCardDateMonth(e.target.value)}
									placeholder='month'
									className={st.dateMonth}
									maxLength={2}
								/>
								<p>/</p>
								<input
									type='text'
									value={cardDateYear}
									onChange={e => setCardDateYear(e.target.value)}
									placeholder='year'
									className={st.dateYear}
									maxLength={2}
								/>
							</div>
							<input
								type='text'
								value={cardholderName}
								onChange={e => setCardholderName(e.target.value.toUpperCase())}
								placeholder='Cardholder name'
								className={st.cardholderName}
							/>
						</div>
						<Box sx={{ minWidth: 120 }}>
							<FormControl
								variant='filled'
								sx={{ backgroundColor: 'white' }}
								fullWidth
							>
								<InputLabel id='demo-simple-select-label'>Card</InputLabel>
								<Select
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									label='Card'
									value={cardManufacturingCompany}
									onChange={e => setCardManufacturingCompany(e.target.value)}
								>
									<MenuItem value={CardTypes.Visa}>
										<FaCcVisa color='balck' size={'40px'} />
									</MenuItem>
									<MenuItem value={CardTypes.MasterCard}>
										<FaCcMastercard color='black' size={'40px'} />
									</MenuItem>
									<MenuItem value={CardTypes.PayPal}>
										<FaCcPaypal color='black' size={'40px'} />
									</MenuItem>
								</Select>
							</FormControl>
						</Box>
					</div>
				</div>
				<button onClick={handleSubmitNewCard}>Add card</button>
			</div>
		</div>
	)
}
