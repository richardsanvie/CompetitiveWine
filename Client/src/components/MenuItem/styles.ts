import styled from 'styled-components'
import { Props } from '.'
import { Link } from 'react-router-dom'
import variaveis from '../../styles/variaveis'

export const Container = styled(Link)<Props>`
  width: 80px;
  height: 113px;
  align-items: center;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`

export const Box = styled.div<Props>`
  background-color: ${variaveis.azul};
  width: 70px;
  height: 70px;
  border-radius: 20px;
  border: 1px solid ${(props) => (props.ativo ? '#000' : '#4fa1c1')};
  margin: 0 auto;
  margin-bottom: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${variaveis.azul};
  }
`
export const Titulo = styled.div`
  font-size: 14px;
  text-align: center;
  font-weight: 500;
  text-transform: uppercase;
  color: ${variaveis.azul};
`
export const Image = styled.div``
export const Complete = styled.div<Props>`
  font-size: 14px;
  text-align: center;
  font-weight: 500;
  text-transform: uppercase;
  color: ${variaveis.azul};
`
