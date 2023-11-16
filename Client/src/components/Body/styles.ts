import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Container = styled.div`
  width: 447px;
  height: 484px;
  border-radius: 20px;
  background-color: ${variaveis.branco};
  margin-top: 33px;
  padding: 26px 15px 113px 14px;

  .floatingImage {
    top: 609px;
    position: absolute;
    left: 112px;
    right: 100px;
  }
`

export const Saudacoes = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #707070;
  line-height? 19.55px;
`
