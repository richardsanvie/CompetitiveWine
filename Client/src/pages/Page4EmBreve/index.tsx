import * as Y from './styles'
import { EmBreve } from '../../components/EmBreve'
import { BarraLateral } from '../../containers/BarraLateral'
import Menu from '../../components/Menu'
import * as S from '../../containers/Main/styles'

export const EmBreve4 = () => {
  return (
    <>
      <BarraLateral />
      <Y.Container>
        <div>
          <Menu informacaoCompartilhada={''} />
          <EmBreve />
        </div>
        <Y.BarraNextandPreview>
          <S.Button to="/embreve3">Passo Anterior</S.Button>
          <S.Button to="/embreve5">Próximo Passo</S.Button>
        </Y.BarraNextandPreview>
      </Y.Container>
    </>
  )
}
