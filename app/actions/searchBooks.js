import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_BOOKS } from '../constants'
import { API_SERVER, API_KEY } from '../env'

export const getSearchBooks = (listname) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_SEARCH_BOOKS'))
		try {
			const response = await fetch(`${API_SERVER}/svc/books/v3/lists.json?list=${listname}&api-key=${API_KEY}`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				}
			})
			const data = await response.json()
			await dispatch(receiveBooks(data.results))
			await dispatch(setSuccess(true, 'SUCCESS_SEARCH_BOOKS'))
      		await dispatch(setLoading(false, 'LOADING_SEARCH_BOOKS'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_SEARCH_BOOKS', e))
			dispatch(setLoading(false, 'LOADING_SEARCH_BOOKS'))
		}
	}
}


const receiveBooks = data => {
	return{
		type: RECEIVE_BOOKS,
		payload: data
	}
}