import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import dashboardReducer from './slices/dashboardReducer'
import myWaletReducer from './slices/myWaletReducer'

const preloadedState = localStorage.getItem('finance-app')
	? JSON.parse(localStorage.getItem('finance-app') as string)
	: {}

export const store = configureStore({
	reducer: {
		//@ts-expect-error я так чувствую © Олег Тинькоф
		dashboard: dashboardReducer,
		myWalet: myWaletReducer,
	},
	preloadedState,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

store.subscribe(() => {
	localStorage.setItem('finance-app', JSON.stringify(store.getState()))
})
