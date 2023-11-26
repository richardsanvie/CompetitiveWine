import { useSelector } from 'react-redux'
import Axios from 'axios'

import * as S from './styles'
import { Dados } from '../Dados'
import { useEffect, useState } from 'react'
import EditaUsuario from '../EditaUsuario'
import { RootReducer } from '../../store'
import * as enums from '../../utils/enums/CargoAtividade'

export type Props = {
  valor?: enums.estaAtivo
  atualizarInformacao: (novaInformacao: string) => void
}

export const ListDados: React.FC<Props> = ({ atualizarInformacao }: Props) => {
  const [listDb, setListDb] = useState<any[]>([])

  const { itens } = useSelector((state: RootReducer) => state.dados)
  const [openButton, setOpenButton] = useState<number | null>(null)
  const [handleShowOnlyActivated, setHandleShowOnlyActivated] = useState(false)

  const toggleButton = (buttonIndex: number) => {
    if (openButton === buttonIndex) {
      setOpenButton(null)
    } else {
      setOpenButton(buttonIndex)
    }
  }

  const filtro = () => {
    if (listDb.length > 0) {
      return listDb.filter((item) => {
        if (handleShowOnlyActivated) {
          return item.valor === enums.estaAtivo.Ativo
        }
        return true
      })
    } else {
      return itens.filter((item) => {
        if (handleShowOnlyActivated) {
          return item.valor === enums.estaAtivo.Ativo
        }
        return true
      })
    }
  }

  const LDados = filtro()

  useEffect(() => {
    Axios.get('http://localhost:3001/getDados').then((response) =>
      setListDb(response.data)
    )
  }, [listDb])

  const handleClick = () => {
    const novaInformacao = 'CONCLUIDO'
    atualizarInformacao(novaInformacao)
  }

  const toggler = document.querySelector('.toggle-switch') as HTMLElement | null

  if (toggler) {
    toggler.onclick = () => {
      if (!toggler.classList.contains('active')) {
        toggler.classList.add('active')
      }
    }
  }

  return (
    <>
      <S.Gestao>
        <S.Title>Funcionários</S.Title>
        <S.Body>
          <S.AdicionarFuncionarios to="/novo">
            + Adicionar Funcionário
          </S.AdicionarFuncionarios>
          <S.BarraAcoes>
            <div>
              <S.Button onClick={() => setHandleShowOnlyActivated(true)}>
                Ver apenas ativos
              </S.Button>
              <S.Button onClick={() => setHandleShowOnlyActivated(false)}>
                Limpar Filtros
              </S.Button>
            </div>
            <S.P>
              Ativos {LDados.length}/
              {listDb.length > 0 ? listDb.length : itens.length}
            </S.P>
          </S.BarraAcoes>
          {LDados &&
            LDados.map((t, index) => (
              <div key={index}>
                <S.ControllName>
                  <Dados
                    nome={t.nome}
                    cpf={t.cpf}
                    atividade={t.atividade}
                    cargo={t.cargo}
                    valor={t.valor}
                  />
                  <S.Mais onClick={() => toggleButton(t.cpf)}>
                    {openButton === t.cpf ? 'Sair' : '...'}
                  </S.Mais>
                </S.ControllName>
                {openButton === t.cpf && (
                  <EditaUsuario
                    idsea={t.idsea}
                    nome={t.nome}
                    cpf={t.cpf}
                    atividade={t.atividade}
                    cargo={t.cargo}
                    valor={t.valor}
                    sexo={t.sexo}
                    rg={t.rg}
                    nascimento={t.nascimento}
                    epi={t.epi}
                    ca={t.ca}
                  />
                )}
              </div>
            ))}
          <S.Conclusao>
            <S.ConclusaoP>A etapa está concluída?</S.ConclusaoP>
            <S.ButtonConcluido
              atualizarInformacao={atualizarInformacao}
              onClick={handleClick}
            >
              <span className="toggle-switch">
                <span className="toggle-knob"></span>
              </span>
            </S.ButtonConcluido>
          </S.Conclusao>
        </S.Body>
      </S.Gestao>
    </>
  )
}
