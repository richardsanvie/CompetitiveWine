import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/CargoAtividade'

type FiltroState = {
  valor?: enums.estaAtivo[]
  criterio: 'ativo' | 'inativo' | 'todos'
}

const initialState: FiltroState = {
  valor: [enums.estaAtivo.Ativo, enums.estaAtivo.Inativo],
  criterio: 'todos'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.valor = action.payload.valor
    }
  }
})

export const { alterarFiltro } = filtroSlice.actions
export default filtroSlice.reducer
