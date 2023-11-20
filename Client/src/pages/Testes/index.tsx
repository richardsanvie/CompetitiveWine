import * as S from './styles'
import notf from '../../image/notf.svg'

const images = {
  notf: notf
}

export type Props = {
  ativo?: boolean
  onClick?: () => void
  imagem?: string
  to?: string
  notf?: boolean
}

const Testes = ({ ativo, imagem, onClick, to, notf }: Props) => {
  return (
    <S.Container ativo={ativo} onClick={onClick} to={to}>
      <S.Card>
        <img src={imagem} alt="Nav1" />
        {notf && (
          <S.Notificacao notf={notf}>
            <img src={images.notf} alt="Nav1" />
          </S.Notificacao>
        )}
      </S.Card>
    </S.Container>
  )
}

export default Testes
