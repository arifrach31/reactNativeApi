import { combineReducers } from 'redux'
import { loading, success, failed } from './processor'
import { resultArticles } from './searchArticles'
import { resultBooks } from './searchBooks'
import { banners } from './banners'
import { sessionPersistance } from "./login";

const rootReducers = combineReducers({
  loading,
  success,
  failed,
  resultArticles,
  resultBooks,
  banners,
  sessionPersistance
})

export default rootReducers