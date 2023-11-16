import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

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

export const Button = styled.button`
  color: ${variaveis.branco};
  font-size: 14px;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  padding: 8px 50px;
  background-color: ${variaveis.azul};
  border: 0;
  border-radius: 10px;
`
