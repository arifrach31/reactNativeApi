import { RECEIVE_BOOKS } from '../constants'

export const resultBooks = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_BOOKS:
			return action.payload
		default:
			return state
	}
}