import { combineReducers } from 'redux'
import { loading, success, failed } from './processor'
import { resultArticles } from './searchArticles'
import { resultBooks } from './searchBooks'

const rootReducers = combineReducers({
  loading,
  success,
  failed,
  resultArticles,
  resultBooks
})

export default rootReducers