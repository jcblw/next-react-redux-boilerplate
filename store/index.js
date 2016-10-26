import { createStore, combineReducers } from 'redux'

export const configStore = (preload = {}) => {
  return createStore(
    combineReducers({}),
    preload
  )
}
