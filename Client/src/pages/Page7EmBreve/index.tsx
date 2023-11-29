import * as Y from './styles'
import { EmBreve } from '../../components/EmBreve'
import { BarraLateral } from '../../containers/BarraLateral'
import Menu from '../../components/Menu'
import * as S from '../../containers/Main/styles'
import { handleItemClick } from '../../utils/handleItemClickMenu'

export type Props = {
  handleItemClick: void
}

export const EmBreve7 = () => {
  const onItemClick = (itemId: number) =>
    handleItemClick(itemId, setSelectedItem)
  console.log(onItemClick)

  return (
    <>
      <BarraLateral />
      <Y.Container>
        <div>
          <Menu informacaoCompartilhada={''} />
          <EmBreve />
        </div>
        <Y.BarraNextandPreview>
          <S.Button to="/embreve6">Passo Anterior</S.Button>
          <S.Button to="/embreve8">Próximo Passo</S.Button>
        </Y.BarraNextandPreview>
      </Y.Container>
    </>
  )
}
function setSelectedItem(id: number): void {
  throw new Error('Function not implemented.')
}