import { useState } from 'react'
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from 'react-icons/fa'
import { useAppSelector } from '../../redux/store'
import { CardTypes, ObjectLiteral } from '../../types'
import CardInfoModal from '../Modals/CardSetingsModal/CardInfoModalsl'
import st from './CardInfo.module.scss'

export default function CardInfo() {
	const { cards, currentCardIndex } = useAppSelector(state => state.dashboard)
	const card = cards[currentCardIndex]
	const cardManufacturingIcon: ObjectLiteral = {
		Visa: <FaCcVisa color='black' size={'110px'} />,
		MasterCard: <FaCcMastercard color='black' size={'110px'} />,
		PayPal: <FaCcPaypal color='black' size={'110px'} />,
	}

	const [isOpen, setIsOpen] = useState<boolean>(false)

	function handleOpenInfoModals(): void {
		setIsOpen(true)
	}
	function handleCloseInfoModals(): void {
		setIsOpen(false)
	}
	return (
		<div className={st.root}>
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
			<button className={st.setingsButton} onClick={handleOpenInfoModals}>
				Card Info
			</button>
			<CardInfoModal
				isOpenModalsSeting={isOpen}
				onClose={handleCloseInfoModals}
			/>
		</div>
	)
}
