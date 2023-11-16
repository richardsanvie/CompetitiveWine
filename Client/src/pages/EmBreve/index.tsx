import { Container } from './styles'
import { EmBreve } from '../../components/EmBreve'
import { BarraLateral } from '../../containers/BarraLateral'
import Menu from '../../components/Menu'

export const PageEmBreve = () => {
  return (
    <>
      <BarraLateral />
      <Container>
        <Menu informacaoCompartilhada={''} />
        <EmBreve />
      </Container>
    </>
  )
}
