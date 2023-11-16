import { useEffect, useState } from 'react'

import * as S from './styles'
import { useDispatch } from 'react-redux/es/exports'
import { remover, editar } from '../../store/reducers/dados'
import * as enums from '../../utils/enums/CargoAtividade'
import Axios from 'axios'
import Dado from '../../models/Dado'

type Props = Dado

const EditaUsuario = ({
  nome: nomeOriginal,
  cargo: cargoOriginal,
  cpf: cpfOriginal,
  atividade: atividadeOriginal,
  idsea,
  epi: epiOriginal,
  nascimento: nascimentoOriginal,
  rg: rgOriginal,
  sexo: sexoOriginal,
  valor: valorOriginal,
  ca: caOriginal
}: Props) => {
  const [isChecked, setIsChecked] = useState(false)
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState(cpfOriginal)
  const [cargo, setCargo] = useState(cargoOriginal)
  const [atividade, setAtividade] = useState(atividadeOriginal)
  const [valor, setValor] = useState(valorOriginal)
  const [sexo, setSexo] = useState(sexoOriginal)
  const [rg, setRg] = useState(rgOriginal)
  const [nascimento, setNascimento] = useState(nascimentoOriginal)
  const [epi, setEpi] = useState(epiOriginal)
  const [ca, setCa] = useState(caOriginal)

  const handleEditDado = async () => {
    dispatch(
      editar({
        atividade,
        cargo,
        cpf,
        nome,
        idsea,
        valor,
        sexo,
        rg,
        nascimento,
        epi,
        ca
      })
    )
    try {
      await Axios.put('http://localhost:3001/edit', {
        nome,
        idsea,
        cpf,
        atividade,
        cargo,
        valor,
        sexo,
        rg,
        nascimento,
        epi,
        ca
      })
    } catch (error: any) {
      console.error('Erro ao editar dados:', error.message)
    }
  }

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    setEpi(enums.Epi.Epi)
    setAtividade(enums.Atividade.Ativ)
  }

  useEffect(() => {
    if (epi === enums.Epi.Epi) {
      setIsChecked(true)
    } else {
      setIsChecked(false)
    }
  }, [epi, enums])

  useEffect(() => {
    if (cpfOriginal !== cpf) {
      setCpf(cpfOriginal)
    }
  }, [cpfOriginal])

  useEffect(() => {
    if (nomeOriginal !== nome) {
      setNome(nomeOriginal)
    }
  }, [nomeOriginal])

  const handlePageLoading = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const handleDelete = async () => {
    dispatch(remover(idsea))
    try {
      await Axios.delete(`http://localhost:3001/delete/${idsea}`)
    } catch (error: any) {
      console.error('Erro ao excluir item:', error.message)
    }
  }

  return (
    <S.Form onSubmit={handlePageLoading}>
      <S.Body>
        <S.AtivoOuInativo>
          <div>
            <S.ButtonRemove onClick={handleDelete}>Remover</S.ButtonRemove>
          </div>
          <S.AtivoOuInativoRemove>
            <S.Label>o trabalhador está ativo ou inativo?</S.Label>
            <S.Ativo
              defaultValue={valor}
              onChange={(evento) =>
                setValor(evento.target.value as enums.estaAtivo)
              }
            >
              <option value={enums.estaAtivo.Ativo}>
                {enums.estaAtivo.Ativo}
              </option>
              <option value={enums.estaAtivo.Inativo}>
                {enums.estaAtivo.Inativo}
              </option>
            </S.Ativo>
          </S.AtivoOuInativoRemove>
          <div>
            <S.ButtonRemove onClick={handleEditDado} type="submit">
              Salvar
            </S.ButtonRemove>
          </div>
        </S.AtivoOuInativo>
        <S.DadosBasicos>
          <div>
            <S.Label500>Nome</S.Label500>
            <S.Input
              defaultValue={nome}
              required
              onChange={(evento) => setNome(evento.target.value)}
            />
          </div>
          <div>
            <S.Label500>CPF</S.Label500>
            <S.InputFormatado
              mask="000.000.000-00"
              defaultValue={cpf}
              required
              onAccept={(value) => {
                setCpf(value)
              }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setCpf(event.target.value)
              }
            />
          </div>
          <div>
            <S.Label500>RG</S.Label500>
            <S.InputFormatado
              mask="0.000.000"
              value={rg}
              onAccept={(value) => {
                setRg(value)
              }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setRg(event.target.value)
              }
            />
          </div>
          <div>
            <S.Label500>Sexo</S.Label500>
            <S.Select
              value={sexo}
              onChange={(evento) =>
                setSexo(evento.target.value as enums.MascFem)
              }
            >
              <option value={enums.MascFem.Masculino}>
                {enums.MascFem.Masculino}
              </option>
              <option value={enums.MascFem.Feminino}>
                {enums.MascFem.Feminino}
              </option>
            </S.Select>
          </div>
          <div>
            <S.Label500>Data de nascimento</S.Label500>
            <S.InputFormatado
              mask="00/00/0000"
              defaultValue={nascimento}
              onAccept={(value) => {
                setNascimento(value)
              }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setNascimento(event.target.value)
              }
            />
          </div>
          <div>
            <S.Label500>Cargo</S.Label500>
            <S.Select
              value={cargo}
              onChange={(evento) =>
                setCargo(evento.target.value as enums.Cargo)
              }
            >
              <option value={enums.Cargo.Cargo0}>{enums.Cargo.Cargo0}</option>
              <option value={enums.Cargo.Cargo1}>{enums.Cargo.Cargo1}</option>
              <option value={enums.Cargo.Cargo2}>{enums.Cargo.Cargo2}</option>
            </S.Select>
          </div>
        </S.DadosBasicos>
        <S.Epi>
          <S.Title>Quais EPIs o trabalhador usa na atividade?</S.Title>
          <div>
            <S.CheckboxInput
              isChecked={isChecked}
              type="checkbox"
              checked={isChecked}
              defaultValue={epi}
              onChange={() => {
                handleCheckboxChange()
              }}
            />
            <S.Label400Span>O trabalhador não usa EPI.</S.Label400Span>
          </div>
          {isChecked ? (
            <></>
          ) : (
            <>
              <S.Box>
                <S.Label400>Atividade</S.Label400>
                <S.FullInput
                  defaultValue={atividade}
                  onChange={(evento) =>
                    setAtividade(evento.target.value as enums.Atividade)
                  }
                >
                  <option value={enums.Atividade.Ativ00}>
                    {enums.Atividade.Ativ00}
                  </option>
                  <option value={enums.Atividade.Ativ01}>
                    {enums.Atividade.Ativ01}
                  </option>
                  <option value={enums.Atividade.Ativ02}>
                    {enums.Atividade.Ativ02}
                  </option>
                </S.FullInput>
                <S.InternBox>
                  <div>
                    <S.Label400>Selecione o EPI:</S.Label400>
                    <S.YoungInput
                      defaultValue={epi}
                      onChange={(evento) =>
                        setEpi(evento.target.value as enums.Epi)
                      }
                    >
                      <option value={enums.Epi.Epi1}>{enums.Epi.Epi1}</option>
                      <option value={enums.Epi.Epi2}>{enums.Epi.Epi2}</option>
                      <option value={enums.Epi.Epi3}>{enums.Epi.Epi3}</option>
                    </S.YoungInput>
                  </div>
                  <div>
                    <S.Label400>Informe o número do CA:</S.Label400>
                    <S.InputFormatadoCA
                      mask="00-0"
                      defaultValue={ca}
                      onAccept={(value) => {
                        setCa(value)
                      }}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setCa(event.target.value)
                      }
                    />
                  </div>
                  <div>
                    <S.OutlineButton>Adicionar EPI</S.OutlineButton>
                  </div>
                </S.InternBox>
              </S.Box>
              <S.FullButton>Adicionar outra atividade</S.FullButton>
            </>
          )}
        </S.Epi>
        <S.BoxAtestado>
          <S.Title>Adicione Atestado de Saúde Ocupacional (opcional):</S.Title>
          <S.InputFile>Documento 1.png</S.InputFile>
          <S.FullButton>Selecionar arquivo</S.FullButton>
        </S.BoxAtestado>
      </S.Body>
    </S.Form>
  )
}

export default EditaUsuario
