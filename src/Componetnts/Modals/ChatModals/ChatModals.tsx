import classNames from 'classnames'
import { useState } from 'react'
import petson from '../../../ProgectFoto/person.svg'
import st from './ChatModals.module.scss'
type Props = {
	onClose: () => void
	isOpenChat: boolean
}

export default function ChatModals({ onClose, isOpenChat }: Props) {
	const [inputValue, setInputValue] = useState<string>('')
	const [messages, setMassage] = useState<string[]>([])
	function handleSendMassage() {
		if (inputValue) {
			setMassage([...messages, inputValue])
			setInputValue('')
		}
	}
	return (
		<div className={st.root}>
			<div className={isOpenChat ? classNames(st.modal, st.open) : st.modal}>
				<div className={st.modalContent}>
					<div className={st.consultantContainer}>
						<div className={st.consultantFoto}>
							<img src={petson} />
						</div>
						<div className={st.nameAndStatys}>
							<h4>Vladimir</h4>
							<h5>Online</h5>
						</div>
					</div>
					<div className={st.massageContainer}>
						{messages.map((msg, index) => (
							<div key={index} className={st.message}>
								{msg}
							</div>
						))}
					</div>
					<div className={st.inputContainer}>
						<input
							type='text'
							value={inputValue}
							onChange={e => setInputValue(e.target.value)}
							className={st.input}
							placeholder='Enter a message...'
						/>
						<button className={st.sendButton} onClick={handleSendMassage}>
							Send
						</button>
					</div>
					<button className={st.close} onClick={onClose}>
						Close
					</button>
				</div>
			</div>
		</div>
	)
}
