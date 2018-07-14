import { combineReducers } from 'redux'
import { loading, success, failed } from './processor'
import { resultArticles } from './searchArticles'
import { resultBooks } from './searchBooks'
import { banners } from './banners'

const rootReducers = combineReducers({
  loading,
  success,
  failed,
  resultArticles,
  resultBooks,
  banners
})

export default rootReducers