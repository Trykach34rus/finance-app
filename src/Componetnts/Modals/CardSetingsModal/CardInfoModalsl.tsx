import classNames from 'classnames'
import st from './CardInfolModals.module.scss'
type Props = {
	onClose: () => void
	isOpenModalsSeting: boolean
}
export default function CardInfoModal({ isOpenModalsSeting, onClose }: Props) {
	return (
		<div className={st.root}>
			<div className={classNames(st.modal, { [st.open]: isOpenModalsSeting })}>
				<div className={st.modalContent}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
						laborum porro nihil accusantium ut, quae totam consectetur ea! Rem
						praesentium nam, ipsam pariatur facere cumque voluptates nobis illum
						neque iste!
					</p>
					<button onClick={onClose}>Close</button>
				</div>
			</div>
		</div>
	)
}
