import styled from 'styled-components'
import * as enums from '../../utils/enums/CargoAtividade'
import { IMaskInput } from 'react-imask'
import variaveis from '../../styles/variaveis'

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
export const DivMapTrash = styled.div`
  height: 36px;
  width: 136px;
  display: flex;
`
const OutlineButtonPai = `
  height: 36px;
  border: 0;
  margin-top: 27px;
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

export const Img = styled.img`
  height: 21px;
`

export const OutlineButtonTrash = styled.button`
  ${OutlineButtonPai}
  width: 36px;
  height: 36px;
  border-radius: 0 10px 10px 0;
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
  border-radius: 10px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  background-color: ${variaveis.branco};
  margin-bottom: 27px;
`
export const AtivoOuInativoRemoveEdit = styled.div`
  width: 355px;
  border: 1px solid ${variaveis.azul};
  border-radius: 10px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  background-color: ${variaveis.branco};
`

export const Ativo = styled.select<Props>`
  width: 69px;
  height: 21px;
  border-radius: 10px;
  border: 1px solid ${variaveis.azul};
  background-color: ${variaveis.branco};
`

export const ButtonRemove = styled.button`
  border-radius: 10px;
  height: 47px;
  border: 1px solid ${variaveis.azul};
  background-color: ${variaveis.branco};
  width: 165px;
  padding: 12px;
  font-size: 16px;
  font-weight: 500;
  color: #${variaveis.cinzaEscuro};
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
export const DadosBasicos = styled.div`
  width: 725px;
  height: 235px;
  background-color: ${variaveis.branco};
  border: 1px solid ${variaveis.azul};
  border-radius: 10px;
  padding: 8px 12px 0 12px;
  display: grid;
  grid-template-columns: 340px auto;
  justify-content: space-between;
`

export const Input = styled.input<Props>`
  width: 338px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid ${variaveis.azul};
  background-color: ${variaveis.branco};
  margin-bottom: 12px;
  padding: 5px;
`
export const Select = styled.select<Props>`
  width: 338px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid ${variaveis.azul};
  background-color: ${variaveis.branco};
  margin-bottom: 12px;
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #${variaveis.cinzaEscuro};
  font-family: 'Roboto', sans-serif;
  margin-bottom: 12px;
`

export const Button = styled.button<Props>`
  width: 69px;
  height: 21px;
  border-radius: 10px;
  border: 1px solid ${variaveis.azul};
  background-color: ${variaveis.branco};
`

export const Label = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #${variaveis.cinzaEscuro};
  font-family: 'Roboto', sans-serif;
`
export const Label500 = styled.p<Props>`
  font-size: 16px;
  font-weight: 500;
  color: #${variaveis.cinzaEscuro};
  font-family: 'Roboto', sans-serif;
  margin-bottom: 8px;
`
export const Label400 = styled.p<Props>`
  font-size: 16px;
  font-weight: 400;
  color: #${variaveis.cinzaEscuro};
  font-family: 'Roboto', sans-serif;
  margin-bottom: 8px;
`
export const Label400Span = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #${variaveis.cinzaEscuro};
  font-family: 'Roboto', sans-serif;
  margin-left: 7px;
`
export const CheckboxInput = styled.input<Props>``

export const YoungInput = styled.select<Props>`
  width: 260px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid ${variaveis.azul};
  background-color: ${variaveis.branco};
  padding: 5px;
  margin-bottom: 5px;
`

export const DivTrashativ = styled.div`
  display: flex;
`

export const FullInput = styled.select<Props>`
  height: 36px;
  border: 1px solid ${variaveis.azul};
  background-color: ${variaveis.branco};
  cursor: pointer;
  margin-top: 8px;
  width: ${(props) => (props.trash ? '640px' : '676px')};
  border-radius: ${(props) => (props.trash ? '10px 0 0 10px' : '10px')};
`

export const YoungInputCA = styled.input<Props>`
  width: 260px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid ${variaveis.azul};
  background-color: ${variaveis.branco};
  padding: 5px;
`

export const InternBox = styled.div<Props>`
  width: 678px;
  height: ${(props) => (props.trash ? '63px' : 'auto')};
  border: 0;
  display: grid;
  grid-template-columns: 266px 266px 146px;
  justify-content: space-between;
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

export const Box = styled.div<Props>`
  margin-top: 11px;
  width: 700px;
  height: auto;
  border-radius: 10px;
  padding: 9px 12px 12px 12px;
  border: 1px solid ${variaveis.azul};
  background-color: ${variaveis.branco};
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

export const OutlineButton = styled.button<Props>`
  ${OutlineButtonPai}
  width: ${(props) => (props.trash ? '100px' : '136px')};
  border-radius: 10px;
  font-size: ${(props) => (props.trash ? '12px' : '16px')};
  &:hover {
    border-radius: ${(props) => (props.trash ? '10px 0 0 10px' : '10px')};
  }
`

export const FullButton = styled.button`
  width: 700px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid ${variaveis.azul};
  background-color: ${variaveis.branco};
  margin-top: 10px;
  font-size: 16px;
  font-weight: 400;
  color: #${variaveis.cinzaEscuro};
  font-family: 'Roboto', sans-serif;
  &:hover {
    background-color: ${variaveis.azul};
    color: ${variaveis.branco};
    transition: background-color 0.3s, color 0.3s;
    opacity: 0.9;
    cursor: pointer;
  }
`
export const BoxAtestado = styled.div`
  width: 726px;
  height: 135px;
  padding: 10px 12px 12px 12px;
  border-radius: 10px;
  border: 1px solid ${variaveis.azul};
  background-color: ${variaveis.branco};
  margin-top: 20px;
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
