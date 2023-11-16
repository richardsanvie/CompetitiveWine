import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Aside = styled.aside`
  padding-right: 12px;
  background-color: ${variaveis.azul};
  height: 768px;
  width: 58px;
  border-radius: 0px 20px 20px 0px;

  .floatingImageWhite {
    margin-top: 50px;
    margin-left: 1px;
    position: absolute;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  margin-top: 200px;
  margin-bottom: 233px;
`
export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
`
