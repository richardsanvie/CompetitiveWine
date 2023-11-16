import * as S from './styles'
import image from '../../image/notf.svg'

const images = {
  nav1: image
}

export type Props = {
  ativo?: boolean
  onClick?: () => void
  imagem?: string
  to?: string
}

const NavBar = ({ ativo, imagem, onClick, to }: Props) => {
  return (
    <S.Container ativo={ativo} onClick={onClick} to={to}>
      <S.Card>
        <img src={imagem} alt="Nav1" />
        <S.Notificacao>
          <img src={images.nav1} alt="Nav1" />
        </S.Notificacao>
      </S.Card>
    </S.Container>
  )
}

export default NavBar
