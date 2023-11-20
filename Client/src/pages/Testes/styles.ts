import styled from 'styled-components'
import { Props } from '.'
import { Link } from 'react-router-dom'
import variaveis from '../../styles/variaveis'

export const Container = styled(Link)<Props>`
  border-left: solid 8px ${(props) => (props.ativo ? '#ffffff' : '#4FA1C1')};
  padding-left: 5px;
  width: 1px;
  text-decoration: none;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`

export const Card = styled.div`
  background-color: ${variaveis.branco};
  width: 32px;
  height: 32px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Image1 = styled.img``
export const Notificacao = styled.div<Props>`
  position: absolute;
  top: 391px;
  left: 34px;
  line-height: 16px;
  width: 13.673px;
  height: 14.015px;
  flex-shrink: 0;
  border-radius: 4px;
`
