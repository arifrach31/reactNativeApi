import { RECEIVE_ARTICLES } from '../constants'

export const resultArticles = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_ARTICLES:
			return action.payload
		default:
			return state
	}
}