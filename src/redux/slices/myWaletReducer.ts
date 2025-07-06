import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { CategoryDream } from '../../types'

interface Article {
	author: string
	title: string
	description: string
	url: string
}
interface MyWaletState {
	categoryDream: CategoryDream
	rates: string[]
	articles: Article[]
}

interface CurrencyResponse {
	rates: string[]
}
interface NewsResponse {
	articles: Article[]
}
const initialState: MyWaletState = {
	categoryDream: {
		car: 0,
		privateHousing: 0,
		journey: 0,
		wedding: 0,
		study: 0,
		bisnes: 0,
	},
	rates: [],
	articles: [],
}

const getCurrency = createAsyncThunk<CurrencyResponse>(
	'myWallet/getCurrency',
	async (): Promise<CurrencyResponse> => {
		const response = await axios.get(
			'https://v6.exchangerate-api.com/v6/e8ada5306e32a42ba2e3a91e/latest/USD'
		)
		return {
			rates: response.data.conversion_rates,
		}
	}
)
const getNews = createAsyncThunk<NewsResponse>(
	'myWallet/getNews',
	async (): Promise<NewsResponse> => {
		const response = await axios.get(
			'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b8706e09442c491e9aa9a84edbde177a'
		)
		console.log(response)

		return {
			articles: response.data.articles,
		}
	}
)

export const myWaletSlice = createSlice({
	name: 'myWalet',
	initialState,
	reducers: {
		addAmountOfDream: (
			state,
			action: PayloadAction<{
				amount: number
				description: string
			}>
		) => {
			const { amount, description } = action.payload
			console.log(state.rates)
			if (description.includes('Car')) {
				state.categoryDream.car += amount
			} else if (description.includes('Private Housing')) {
				state.categoryDream.privateHousing += amount
			} else if (description.includes('Journey')) {
				state.categoryDream.journey += amount
			} else if (description.includes('Wedding')) {
				state.categoryDream.wedding += amount
			} else if (description.includes('Study')) {
				state.categoryDream.study += amount
			} else if (description.includes('Bisnes')) {
				state.categoryDream.bisnes += amount
			} else {
				state.categoryDream.wedding += amount
			}
		},
	},
	extraReducers: builder => {
		builder.addCase(getCurrency.fulfilled, (state, action) => {
			state.rates = action.payload.rates
		})
		builder.addCase(getNews.fulfilled, (state, action) => {
			state.articles = action.payload.articles
		})
	},
})

export const { addAmountOfDream } = myWaletSlice.actions
export default myWaletSlice.reducer
export { getCurrency, getNews }
