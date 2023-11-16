import { BarraLateral } from '../../containers/BarraLateral'
import { EmBreve } from '../../components/EmBreve'
import { Main } from '../../containers/Main'
import * as S from './styles'
import { Container } from './styles'
import Menu from '../../components/Menu'

export const EmBreveSideBox = () => (
  <>
    <BarraLateral />
    <Container>
      <EmBreve />
    </Container>
  </>
)
