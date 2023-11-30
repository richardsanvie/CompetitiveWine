import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IMaskInput } from 'react-imask'

import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/CargoAtividade'

interface Props {
  atividade?: enums.Atividade
  cargo?: enums.Cargo
  isChecked?: boolean
  trash?: boolean
}

const BotaoPai = `
  border-radius: 10px;
  border: 1px solid ${variaveis.azul};
  background-color: ${variaveis.branco};
  font-size: 16px;
  color: #3a3a3a;
  font-family: 'Roboto', sans-serif;
  `

export const FileInputContainer = styled.div`
  height: 36px;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #4f4f4f;
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  padding: 10px;
  width: 702px;
  border-radius: 10px;
  border: 1px solid ${variaveis.azul};
  background-color: ${variaveis.branco};
`

export const FileInput = styled.input`
  display: none;
`

export const FileInputLabel = styled.label`
  width: 700px;
  height: 36px;
  ${BotaoPai}
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  font-weight: 400;
  &:hover {
    background-color: ${variaveis.azul};
    color: ${variaveis.branco};
    transition: background-color 0.3s, color 0.3s;
    opacity: 0.9;
    cursor: pointer;
  }
`

export const FileName = styled.span``

export const Form = styled.form``
export const CheckboxInput = styled.input<Props>``
export const BoxPai = styled.div``
export const BoxAtestado = styled.div`
  width: 726px;
  height: 135px;
  padding: 10px 12px 12px 12px;
  border-radius: 10px;
  border: 1px solid ${variaveis.azul};
  background-color: ${variaveis.branco};
  margin-top: 20px;
`

export const DadosBasicos = styled.div`
  width: 725px;
  height: 235px;
  border: 1px solid ${variaveis.azul};
  border-radius: 10px;
  padding: 8px 12px 0 12px;
  display: grid;
  grid-template-columns: 340px auto;
  justify-content: space-between;
`
export const Gestao = styled.div`
  width: 759px;
  height: auto;
  border-radius: 20px;
  margin-top: 33px;
  background-color: #fff;
`

export const InputFormatado = styled(IMaskInput)`
  width: 338px;
  height: 36px;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid ${variaveis.azul};
  background-color: ${variaveis.branco};
  margin-bottom: 12px;
`
export const InputFormatadoCA = styled(InputFormatado)`
  width: 260px;
  height: 36px;
`

export const Header = styled.header`
  height: 55px;
  border-radius: 20px 20px 0 0;
  background-color: ${variaveis.azul};
  width: auto;
  padding: 12px 20px;
  font-size: 28px;
  font-weight: 400;
  color: #fff;
  display: flex;
  align-itens: center;
`
export const Voltar = styled.div`
  margin-right: 14px;
  &:hover {
    transition: background-color 0.3s, color 0.3s;
    opacity: 0.9;
    cursor: pointer;
  }
`
export const Body = styled.div`
  padding: 35px 8px 26px 19px;
`
export const BodyEdit = styled.div`
  padding: 10px 0 20px 5px;
  margin-bottom: 14px;
  background-color: #edf1f5;
  background-color: ${variaveis.branco};
  border: 1px solid ${variaveis.azul};
  border-radius: 10px;
`

export const AtivoOuInativo = styled.div`
  width: 725px;
  border: 1px solid ${variaveis.azul};
  border-radius: 10px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 27px;
  height: 43px;
`

export const Input = styled.input`
  width: 338px;
  height: 36px;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid ${variaveis.azul};
  background-color: ${variaveis.branco};
  margin-bottom: 12px;
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #3a3a3a;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 12px;
`

export const Button = styled.div`
  width: 69px;
  height: 21px;
  border-radius: 10px;
  border: 1px solid ${variaveis.azul};
  background-color: ${variaveis.branco};
`

export const Label = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #3a3a3a;
  font-family: 'Roboto', sans-serif;
`
export const Label500 = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #3a3a3a;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 8px;
`
export const Label400 = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #3a3a3a;
  font-family: 'Roboto', sans-serif;
`
export const YoungInputCA = styled.input<Props>`
  width: 260px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid ${variaveis.azul};
  background-color: ${variaveis.branco};
  padding: 5px;
`
export const Label400Span = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #3a3a3a;
  font-family: 'Roboto', sans-serif;
  margin-left: 7px;
`

export const InternBox = styled.div`
  width: 678px;
  margin-top: 12px;
  height: 63px;
  border: 0;
  display: grid;
  grid-template-columns: 266px 266px 146px;
  justify-content: space-between;
`

export const Box = styled.div`
  margin-top: 11px;
  width: 700px;
  height: auto;
  border-radius: 10px;
  padding: 9px 12px 12px 12px;
  border: 1px solid ${variaveis.azul};
  background-color: ${variaveis.branco};
`

export const InputFile = styled.div`
  height: 36px;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #4f4f4f;
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  padding: 10px;
  width: 702px;
  border-radius: 10px;
  border: 1px solid ${variaveis.azul};
  background-color: ${variaveis.branco};
`
export const DivMapTrash = styled.div`
  height: 36px;
  width: 136px;
  display: flex;
`

const OutlineButtonPai = `
  height: 36px;
  border: 0;
  margin-top: 19px;
  font-weight: 400;
  color: #3a3a3a;
  background-color: ${variaveis.branco};
  font-family: 'Roboto', sans-serif;
  text-align: center;
  &:hover {
    border: solid 1px ${variaveis.azul};
    color: ${variaveis.azul};
    transition: background-color 0.3s, color 0.3s;
    opacity: 0.9;
    cursor: pointer;
    color: #3a3a3a;
  }
`

export const OutlineButton = styled.button<Props>`
  ${OutlineButtonPai}
  width: ${(props) => (props.trash ? '100px' : '136px')};
  border-radius: 10px;
  font-size: ${(props) => (props.trash ? '12px' : '16px')};
  &:hover {
    border-radius: ${(props) => (props.trash ? '10px 0 0 10px' : '10px')};
  }
`
export const DivTrashativ = styled.div`
  display: flex;
`
export const ButtonTrash = styled.button`
  margin-top: 8px;
  width: 36px;
  height: 36px;
  border-radius: 0 10px 10px 0;
  background-color: ${variaveis.branco};
  border: solid 1px ${variaveis.azul};
  &:hover {
    transition: background-color 0.3s, color 0.3s;
    opacity: 0.7;
    cursor: pointer;
    color: #3a3a3a;
`

export const OutlineButtonTrash = styled.button`
  ${OutlineButtonPai}
  width: 36px;
  height: 36px;
  border-radius: 0 10px 10px 0;
`

export const Img = styled.img`
  height: 21px;
`

export const Ativo = styled.select<Props>`
  width: 69px;
  height: 21px;
  border-radius: 10px;
  border: 1px solid ${variaveis.azul};
  background-color: ${variaveis.branco};
  cursor: pointer;
`
export const SelectPai = styled.select<Props>`
  height: 36px;
  border: 1px solid ${variaveis.azul};
  background-color: ${variaveis.branco};
  cursor: pointer;
`
export const YoungInput = styled(SelectPai)<Props>`
  width: 260px;
  margin-bottom: 12px;
  border-radius: 10px;
`

export const Select = styled(SelectPai)<Props>`
  width: 338px;
  margin-bottom: 12px;
  border-radius: 10px;
`

export const FullInput = styled(SelectPai)<Props>`
  margin-top: 8px;
  width: ${(props) => (props.trash ? '640px' : '676px')};
  border-radius: ${(props) => (props.trash ? '10px 0 0 10px' : '10px')};
`

export const FullButton = styled.div<Props>`
  width: 700px;
  height: 36px;
  ${BotaoPai}
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  font-weight: 400;
  &:hover {
    background-color: ${variaveis.azul};
    color: ${variaveis.branco};
    transition: background-color 0.3s, color 0.3s;
    opacity: 0.9;
    cursor: pointer;
  }
`

export const BotaoSalvar = styled.button`
  ${BotaoPai}
  height: 36px;
  width: 723px;
  font-weight: 400;
  margin-top: 14px;

  &:hover {
    background-color: ${variaveis.azul};
    color: ${variaveis.branco};
    transition: background-color 0.3s, color 0.3s;
    opacity: 0.9;
    cursor: pointer;
  }
`

// Edit

export const ButtonRemove = styled.button`
  border-radius: 10px;
  height: 47px;
  border: 1px solid ${variaveis.azul};
  background-color: ${variaveis.branco};
  width: 165px;
  padding: 12px;
  font-size: 16px;
  font-weight: 500;
  color: ${variaveis.cinzaEscuro};
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  &:hover {
    background-color: ${variaveis.azul};
    color: ${variaveis.branco};
    transition: background-color 0.3s, color 0.3s;
    opacity: 0.9;
    cursor: pointer;
  }
`

export const AtivoOuInativoRemove = styled.div`
  width: 355px;
  border: 1px solid ${variaveis.azul};
  border-radius: 10px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  background-color: ${variaveis.branco};
`

export const Epi = styled.div<Props>`
  width: 726px;
  height: ${(props) => (props.isChecked ? '294px' : 'auto')};
  border: 1px solid ${variaveis.azul};
  border-radius: 10px;
  padding: 8px 12px 14px 12px;
  background-color: ${variaveis.branco};
  justify-content: space-between;
  margin-top: 26px;
`

export const Table = styled.table`
  width: 100%;
  text-align: center;

  td {
    border: 1px solid black;
  }
`
