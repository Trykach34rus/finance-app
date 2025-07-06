import { useEffect, useState } from 'react'
import { getNews } from '../../redux/slices/myWaletReducer'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import NewsModal from '../Modals/NewsModal/NewsModal'
import st from './News.module.scss'

export default function News() {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const dispatch = useAppDispatch()
	const { articles } = useAppSelector(state => state.myWalet)
	useEffect(() => {
		dispatch(getNews())
	}, [dispatch])

	function handleNewsModalOpen() {
		setIsOpen(true)
	}
	function handleNewsModalClose() {
		setIsOpen(false)
	}

	return (
		<div className={st.root}>
			<p className={st.title}>News</p>
			<div className={st.articlesContainer}>
				{articles.slice(0, 2).map(article => (
					<div key={article.url} className={st.article}>
						<h2>{article.title}</h2>
						<p>{article.description}</p>
						<p>Author: {article.author}</p>
					</div>
				))}
			</div>
			<button className={st.moreNewsButton} onClick={handleNewsModalOpen}>
				More News
			</button>
			<NewsModal isOpenNewsModal={isOpen} onClose={handleNewsModalClose} />
		</div>
	)
}
