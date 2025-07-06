import classNames from 'classnames'
import { useEffect } from 'react'
import { getNews } from '../../../redux/slices/myWaletReducer'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import st from './NewsModal.module.scss'
type Props = {
	isOpenNewsModal: boolean
	onClose: () => void
}

export default function NewsModal({ isOpenNewsModal, onClose }: Props) {
	const dispatch = useAppDispatch()
	const { articles } = useAppSelector(state => state.myWalet)
	useEffect(() => {
		dispatch(getNews())
	}, [dispatch])
	return (
		<div className={st.root}>
			<div
				className={isOpenNewsModal ? classNames(st.modal, st.open) : st.modal}
			>
				<div className={st.modalContent}>
					{articles.map(article => (
						<div key={article.url} className={st.article}>
							<h2>{article.title}</h2>
							<p>{article.description}</p>
							<p>Author: {article.author}</p>
						</div>
					))}
					<button className={st.close} onClick={onClose}>
						Close
					</button>
				</div>
			</div>
		</div>
	)
}
