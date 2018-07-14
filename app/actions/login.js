import { AsyncStorage } from 'react-native'
import { setLoading, setFailed, setSuccess } from './processor'
import { SAVE_SESSION_PERSISTANCE } from '../constants'
import { API_AUTH } from '../env'

export const login = (email, password) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_LOGIN'))
		try {
			const response = await fetch(`${API_AUTH}/sessions/create`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({email, password})
			})
			const data = await response.json()
			await dispatch(saveSession({ email, password }))
			await dispatch(setSuccess(true, 'SUCCESS_PROCESS_LOGIN'))
			await dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
		} catch (e) {
			await dispatch(setSuccess(false, 'SUCCESS_PROCESS_LOGIN'))
			await dispatch(setFailed(true, 'FAILED_PROCESS_LOGIN', e))
			await dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
		}
	}
}


const saveSession = data => {
	return () => {
		AsyncStorage.setItem('session', JSON.stringify(data))
	}
}

export const saveSessionPersistance = data => {
	return{
		type: SAVE_SESSION_PERSISTANCE,
		payload: data
	}
}