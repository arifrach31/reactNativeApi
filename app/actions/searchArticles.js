import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_ARTICLES } from '../constants'
import { API_SERVER, API_KEY } from '../env'

export const getSearchArticles = (keyword, sortest) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_SEARCH_ARTICLES'))
		console.log('keyword: ', keyword, 'sortest: ', sortest)
		try {
			const response = await fetch(`${API_SERVER}/svc/search/v2/articlesearch.json?q=${keyword}&facet_field=source$fl=multimedia&sort=${sortest}&api-key=${API_KEY}`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				}
			})
			const data = await response.json()
			await dispatch(receiveArticles(data.response.docs))
			console.log('response: ', data.response.docs)
			await dispatch(setSuccess(true, 'SUCCESS_SEARCH_ARTICLES'))
      		await dispatch(setLoading(false, 'LOADING_SEARCH_ARTICLES'))
		} catch (e) {
			console.log('error:', e)
			dispatch(setFailed(true, 'FAILED_SEARCH_ARTICLES', e))
			dispatch(setLoading(false, 'LOADING_SEARCH_ARTICLES'))
		}
	}
}


const receiveArticles = data => {
	return{
		type: RECEIVE_ARTICLES,
		payload: data
	}
}