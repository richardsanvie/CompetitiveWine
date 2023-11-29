import styled from 'styled-components'
import * as enums from '../../utils/enums/CargoAtividade'
import variaveis from '../../styles/variaveis'

interface Props {
  atividade?: enums.Atividade
  cargo?: enums.Cargo
}

export const Dados = styled.div`
  padding: 5px 0 18px 15px;
`

export const Name = styled.p`
  font-weight: 400px;
  font-size: 24px;
  color: #707070;
  margin-bottom: 10px;
`
export const ControllNameButton = styled.button<Props>`
  width: auto;
  height: 24px;
  border-radius: 36px;
  background-color: ${variaveis.azul};
  padding: 4px 16px;
  border: 0;
  color: #fff;
  font-size: 14px;
  margin-right: 12px;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`
