import * as S from './styles'
import * as enums from '../../utils/enums/CargoAtividade'

type Props = {
  nome: string
  cpf: string
  atividade: enums.Atividade
  cargo: enums.Cargo
  valor: enums.estaAtivo
}

export const Dados = ({ atividade, cargo, cpf, nome }: Props) => {
  return (
    <S.Dados>
      <S.Name>{nome}</S.Name>
      <S.ControllNameButton>{cpf}</S.ControllNameButton>
      <S.ControllNameButton atividade={atividade}>
        {atividade}
      </S.ControllNameButton>
      <S.ControllNameButton cargo={cargo}>{cargo}</S.ControllNameButton>
    </S.Dados>
  )
}
