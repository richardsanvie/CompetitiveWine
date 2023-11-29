import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Link } from 'react-router-dom'
import { Props } from '.'

const hover = `
  background-color: ${variaveis.azul};
  color: ${variaveis.branco};
  transition: background-color 0.3s, color 0.3s;
  opacity: 0.9;
  cursor: pointer;
`
export const Gestao = styled.div`
  width: 759px;
  height: auto;
  border-radius: 20px;
  background-color: ${variaveis.branco};
  margin-top: 33px;
`

export const Title = styled.p`
  height: 55px;
  border-radius: 20px 20px 0 0;
  background-color: ${variaveis.azul};
  width: auto;
  padding: 12px 20px;
  font-size: 28px;
  font-weight: 400;
  color: ${variaveis.branco};
`
export const Body = styled.div`
  padding: 35px 8px 29px 16px;
`

export const BarraAcoes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`
export const P = styled.p`
  font-weight: 400;
  font-size: 14px;
`

export const Cancelar = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: white;
`

export const ControllName = styled.div`
  background-color: ${variaveis.cinza};
  width: auto;
  height: 84px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
`
export const Dados = styled.div`
  padding: 5px 0 18px 15px;
`
export const Name = styled.p`
  font-weight: 400;
  font-size: 24px;
  color: #707070;
  margin-bottom: 10px;
`

export const Conclusao = styled.div`
  margin-top: 18px;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  width: auto;
`

export const ConclusaoP = styled.p`
  color: ${variaveis.cinzaEscuro};
  font-size: 14px;
  font-weight: 400;
  margin-right: 12px;
`
// Button

export const DefaultButtonBlueWhite = styled.button`
  background-color: ${variaveis.azul};
  color: ${variaveis.branco};
  font-size: 14px;
  border: 0;
`
export const DefaultButton = styled.button`
  background-color: ${variaveis.branco};
  border: solid 1px ${variaveis.azul};
  color: ${variaveis.azul};
  border-radius: 10px;
  font-weight: 400;
`

export const ButtonConcluido = styled.div<Props>`
  height: 20px;
  border-radius: 50px;

  .toggle-switch,
  .toggle-switch .toggle-knob {
    -moz-transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
  }

  .toggle-switch {
    height: 20px;
    width: 52px;
    display: inline-block;
    background-color: #dbdbdb;
    margin: 2px;
    margin-bottom: 5px;
    border-radius: 30px;
    cursor: pointer;
    border: solid 1px #d2d6de;
    box-shadow: inset 1px 1px 9px -3px rgba(4, 4, 4, 0.08),
      1px 2px 6px -2px rgba(0, 0, 0, 0.01);
  }

  .toggle-switch .toggle-knob {
    width: 16px;
    height: 16px;
    display: inline-block;
    background-color: ${variaveis.azul};
    border: solid 1px rgba(126, 126, 126, 0.07);
    box-shadow: 0 1px 3px rgba(107, 106, 106, 0.26),
      0 5px 1px rgba(107, 106, 106, 0.13);
    border-radius: 26px;
    margin: 1px 1px;
  }

  .toggle-switch.active {
    background-color: #dbdbdb;
    border: solid 1px transparent;
  }

  .toggle-switch.active .toggle-knob {
    margin-left: 33px;
  }

  .ButtonConcluido {
    font-family: 'Ubuntu', sans-serif;
    font-size: 12px;
    font-weight: 300;
  }
`

export const AdicionarFuncionarios = styled.button`
  height: 60px;
  width: 100%;
  padding: 21px;
  margin-bottom: 20px;
  font-size: 16px;
  background-color: ${variaveis.branco};
  border: solid 1px ${variaveis.azul};
  color: ${variaveis.azul};
  border-radius: 10px;
  font-weight: 400;
  display: block;
  text-align: center;
  text-decoration: none;

  &:hover {
    ${hover}
  }
`

export const Button = styled(DefaultButton)`
  width: 192px;
  height: 31px;
  font-size: 14px;
  margin-right: 20px;
  &:hover {
    ${hover}
  }
`

export const Mais = styled(DefaultButtonBlueWhite)`
  width: 49px;
  border-radius: 0 10px 10px 0;
  font-weight: bold;
  background-color: ${variaveis.azul};
  color: ${variaveis.branco};
  font-size: 14px;
  border: 0;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`
export const ControllNameButton = styled(DefaultButtonBlueWhite)`
  width: auto;
  height: 24px;
  border-radius: 36px;
  padding: 4px 16px;
  margin-right: 12px;
`
