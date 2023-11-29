import * as S from './styles'
import { BodySaudacoes } from '../../components/Body'
import { ListDados } from '../../components/ListDados'
import * as enums from '../../utils/enums/CargoAtividade'
import Menu from '../../components/Menu'
import React, { useState } from 'react'

export const Main: React.FC = () => {
  const [informacaoCompartilhada, setInformacaoCompartilhada] = useState('')

  const atualizarInformacao = (novaInformacao: string) => {
    setInformacaoCompartilhada(novaInformacao)
  }

  return (
    <S.Container>
      <Menu informacaoCompartilhada={informacaoCompartilhada} />
      <S.Body>
        <BodySaudacoes />
        <ListDados
          valor={enums.estaAtivo.Ativo}
          atualizarInformacao={atualizarInformacao}
        />
      </S.Body>
      <S.BarraNextandPreview>
        <S.ButtonMain to="/embreve2">Próximo Passo</S.ButtonMain>
      </S.BarraNextandPreview>
    </S.Container>
  )
}
