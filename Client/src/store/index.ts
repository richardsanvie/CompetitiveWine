import { configureStore } from '@reduxjs/toolkit'
import dadosReducer from './reducers/dados'
import filtroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    dados: dadosReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
