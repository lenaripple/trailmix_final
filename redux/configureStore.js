import { createStore } from 'redux'
import app from './reducers/index'

export default function configureStore() {
  let store = createStore(app)
  return store
}
