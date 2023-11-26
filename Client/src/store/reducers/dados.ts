import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Dado from '../../models/Dado'
import * as enums from '../../utils/enums/CargoAtividade'
import Axios from 'axios'

type DadosState = {
  itens: Dado[]
}

const initialState: DadosState = {
  itens: [
    {
      nome: 'Astolfo Menezes Silva',
      cpf: '124.798.987-00',
      atividade: enums.Atividade.Ativ,
      cargo: enums.Cargo.Cargo1,
      idsea: 71,
      valor: enums.estaAtivo.Ativo,
      sexo: enums.MascFem.Masculino,
      rg: '1.234.567',
      nascimento: '19/90/1998',
      epi: [enums.Epi.Epi],
      ca: ['11-1']
    },
    {
      nome: 'Maria Oliveira',
      cpf: '987.654.321-00',
      atividade: enums.Atividade.Ativ01,
      cargo: enums.Cargo.Cargo0,
      idsea: 72,
      valor: enums.estaAtivo.Ativo,
      sexo: enums.MascFem.Feminino,
      rg: '9.876.543',
      nascimento: '19/85/1998',
      epi: [enums.Epi.Epi2],
      ca: ['45-6']
    },
    {
      nome: 'João Silva',
      cpf: '123.456.789-00',
      atividade: enums.Atividade.Ativ02,
      cargo: enums.Cargo.Cargo1,
      idsea: 73,
      valor: enums.estaAtivo.Ativo,
      sexo: enums.MascFem.Masculino,
      rg: '1.234.567',
      nascimento: '10/20/1985',
      epi: [enums.Epi.Epi1, enums.Epi.Epi2],
      ca: ['12-3', '45-8']
    },
    {
      nome: 'Ana Pereira',
      cpf: '456.789.012-34',
      atividade: enums.Atividade.Ativ00,
      cargo: enums.Cargo.Cargo2,
      idsea: 74,
      valor: enums.estaAtivo.Inativo,
      sexo: enums.MascFem.Feminino,
      rg: '4.567.890',
      nascimento: '05/15/1990',
      epi: [enums.Epi.Epi3, enums.Epi.Epi2],
      ca: ['78-9', '78-8']
    },
    {
      nome: 'Carlos Santos',
      cpf: '789.012.345-67',
      atividade: enums.Atividade.Ativ01,
      cargo: enums.Cargo.Cargo2,
      idsea: 75,
      valor: enums.estaAtivo.Ativo,
      sexo: enums.MascFem.Masculino,
      rg: '7.890.123',
      nascimento: '03/08/1982',
      epi: [enums.Epi.Epi1, enums.Epi.Epi3],
      ca: ['34-5', '54-8']
    }
  ]
}

const dadosSlice = createSlice({
  name: 'dados',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((dado) => dado.idsea !== action.payload)
    },
    editar: (state, action: PayloadAction<Dado>) => {
      const indexDoDado = state.itens.findIndex(
        (t) => t.idsea === action.payload.idsea
      )

      if (indexDoDado >= 0) {
        state.itens[indexDoDado] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Dado>) => {
      const DadoJaExiste = state.itens.find(
        (dado) => dado.cpf === action.payload.cpf
      )
      if (DadoJaExiste) {
        alert('Esse Cpf já está cadastrado')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = dadosSlice.actions
export default dadosSlice.reducer
