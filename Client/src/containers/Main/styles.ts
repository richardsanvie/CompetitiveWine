import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Link } from 'react-router-dom'

export const Container = styled.main`
  padding: 33px 34px 14px 32px;
`

export const Menu = styled.div`
  width: 1242px;
  border-radius: 20px;
  padding: 25px 24px 21px 29px;
  background-color: ${variaveis.branco};
`

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
`

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 13px;
  width: 1241px;
`
export const BarraNextandPreview = styled.div`
  width: 1241px;
  display: flex;
  justify-content: flex-end;
`
const ButtonPai = `
color: ${variaveis.branco};
  font-size: 14px;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  padding: 8px 50px;
  background-color: ${variaveis.azul};
  border: 0;
  border-radius: 10px;
  text-decoration: none;
  &:hover {
    background-color: ${variaveis.azul};
    color: ${variaveis.branco};
    transition: background-color 0.3s, color 0.3s;
    opacity: 0.9;
    cursor: pointer;
  }
`

export const Button = styled(Link)`
  ${ButtonPai}
`
export const ButtonMain = styled(Link)`
  ${ButtonPai}
`
