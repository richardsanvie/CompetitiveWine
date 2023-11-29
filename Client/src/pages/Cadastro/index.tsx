import * as S from './styles'
import { BodySaudacoes } from '../../components/Body'
import { Form } from '../../components/Form'
import { BarraLateral } from '../../containers/BarraLateral'
import Menu from '../../components/Menu'

export const Cadastro = () => {
  return (
    <>
      <BarraLateral />
      <S.Container>
        <Menu informacaoCompartilhada={''} />
        <S.Body>
          <BodySaudacoes />
          <Form />
        </S.Body>
        <S.BarraNextandPreview>
          <S.Button to="/embreve1">Próximo Passo</S.Button>
        </S.BarraNextandPreview>
      </S.Container>
    </>
  )
}
