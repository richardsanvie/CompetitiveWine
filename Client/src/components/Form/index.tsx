import { useDispatch } from 'react-redux'
import React, { FormEvent, ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

import Lixo from '../../image/lixo.png'
import * as S from './styles'
import * as enums from '../../utils/enums/CargoAtividade'
import Dado from '../../models/Dado'
import { cadastrar } from '../../store/reducers/dados'
import { ListDados } from '../ListDados'

const image = {
  Lixo: Lixo
}

export const Form = () => {
  const [novo, setNovo] = useState(true)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [idsea, setIdsea] = useState<number>()
  const [trashEpi, setTrashEpi] = useState(false)
  const [trashAtividade, setTrashAtividade] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [epi, setEpi] = useState<any>([enums.Epi.Epi])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState<any>()
  const [valor, setValor] = useState(enums.estaAtivo.Ativo)
  const [cargo, setCargo] = useState(enums.Cargo.Cargo0)
  const [atividade, setAtividade] = useState<any>([enums.Atividade.Ativ])
  const [sexo, setSexo] = useState(enums.MascFem.Masculino)
  const [rg, setRg] = useState<any>()
  const [nascimento, setNascimento] = useState<any>()
  const [ca, setCa] = useState<any>([''])

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    setEpi([enums.Epi.Epi])
    setAtividade([enums.Atividade.Ativ])
    setCa('00-0')
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files

    if (files && files.length > 0) {
      setSelectedFile(files[0])
    }
  }

  const handleAddInputButton = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (epi.length < 3) {
      e.preventDefault()
      setEpi([...epi, ['']])
    }
  }

  const handleChangeEpi = (
    evento: React.ChangeEvent<HTMLSelectElement>,
    i: number
  ) => {
    setEpi((prevEpi: any) => {
      const newEpi = [...prevEpi]
      newEpi[i] = evento.target.value
      return newEpi
    })
    epi[i] = evento.target.value as enums.Epi
    setEpi([...epi])
  }

  const handleChangeAtividade = (
    evento: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    setAtividade((prevAtividade: any) => {
      const newAtividade = [...prevAtividade]
      newAtividade[index] = evento.target.value
      return newAtividade
    })
    atividade[index] = evento.target.value as enums.Atividade
    setAtividade([...atividade])
  }

  const handleAddAtividade = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (atividade.length < 3) {
      e.preventDefault()
      setAtividade([...atividade, ['']])
    }
  }

  const handleRemoteField = (position: number) => {
    if (epi.length > 1) {
      setEpi([...epi.filter((_: any, i: number) => i !== position)])
    }
  }

  const handleRemoteFieldA = (position: number) => {
    if (atividade.length > 1) {
      setAtividade([
        ...atividade.filter((_: any, index: number) => index !== position)
      ])
    }
  }

  const handleChangeCa = (
    evento: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setCa((prevCa: any) => {
      const newCa = [...prevCa]
      newCa[index] = evento.target.value
      return newCa
    })
  }

  const novoDado = {
    nome,
    cpf,
    atividade,
    cargo,
    valor,
    sexo,
    rg,
    nascimento,
    ca,
    epi
  }

  const cadastrarDado = (evento: FormEvent) => {
    Axios.post('http://localhost:3001/register', novoDado).then((response) => {
      console.log('response: ', response)
    })
    evento.preventDefault()
    const dadoParaAdicionar = new Dado(
      nome,
      cpf,
      atividade,
      cargo,
      idsea || 0,
      valor,
      sexo,
      rg,
      nascimento,
      epi,
      ca
    )
    dispatch(cadastrar(dadoParaAdicionar))
    setNovo(false)
  }

  return (
    <>
      {novo ? (
        <S.Gestao>
          <S.Header>
            <S.Voltar onClick={() => setNovo(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="23"
                viewBox="0 0 31 27"
                fill="none"
              >
                <line
                  x1="31"
                  y1="13.5"
                  x2="4"
                  y2="13.5"
                  stroke="white"
                  strokeWidth="5"
                />
                <line
                  x1="15.7678"
                  y1="1.76777"
                  x2="5.76777"
                  y2="11.7678"
                  stroke="white"
                  strokeWidth="5"
                />
                <line
                  x1="15.2322"
                  y1="24.7678"
                  x2="2.23223"
                  y2="11.7678"
                  stroke="white"
                  strokeWidth="5"
                />
              </svg>
            </S.Voltar>
            Adicionar Funcionário
          </S.Header>
          <S.Form onSubmit={cadastrarDado}>
            <S.Body>
              <S.AtivoOuInativo>
                <S.Label>o trabalhador está ativo ou inativo?</S.Label>
                <S.Ativo
                  value={valor}
                  onChange={(evento) => {
                    setValor(evento.target.value as enums.estaAtivo)
                  }}
                >
                  <option value={enums.estaAtivo.Ativo}>Ativo</option>
                  <option value={enums.estaAtivo.Inativo}>Inativo</option>
                </S.Ativo>
              </S.AtivoOuInativo>
              <S.DadosBasicos>
                <div>
                  <S.Label500>Nome</S.Label500>
                  <S.Input
                    value={nome}
                    required
                    onChange={(evento) => setNome(evento.target.value)}
                  />
                </div>
                <div>
                  <S.Label500>CPF</S.Label500>
                  <S.InputFormatado
                    mask="000.000.000-00"
                    value={cpf}
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
                    required
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
                    value={nascimento}
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
                    <option value={enums.Cargo.Cargo0}>
                      {enums.Cargo.Cargo0}
                    </option>
                    <option value={enums.Cargo.Cargo1}>
                      {enums.Cargo.Cargo1}
                    </option>
                    <option value={enums.Cargo.Cargo2}>
                      {enums.Cargo.Cargo2}
                    </option>
                  </S.Select>
                </div>
              </S.DadosBasicos>
              <S.Epi>
                <S.Title>Quais EPIs o trabalhador usa na atividade?</S.Title>
                <div>
                  <S.CheckboxInput
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <S.Label400Span>O trabalhador não usa EPI.</S.Label400Span>
                </div>
                {isChecked ? (
                  <></>
                ) : (
                  <>
                    <S.Box>
                      <S.Label400>Selecione a atividade:</S.Label400>
                      {atividade.map((atividade: string[], index: number) => (
                        <S.DivTrashativ key={index}>
                          <S.FullInput
                            key={index}
                            name="atividade"
                            defaultValue={atividade[index]}
                            trashAtividade={trashAtividade}
                            onChange={(evento) =>
                              handleChangeAtividade(evento, index)
                            }
                          >
                            <option value={enums.Atividade.Ativ}>
                              {enums.Atividade.Ativ}
                            </option>
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
                          {trashAtividade && (
                            <S.ButtonTrash
                              onClick={() => handleRemoteFieldA(index)}
                            >
                              <S.Img src={image.Lixo} alt="" />
                            </S.ButtonTrash>
                          )}
                        </S.DivTrashativ>
                      ))}
                      {epi.map((epi: string[], i: number) => (
                        <div key={i}>
                          <S.InternBox>
                            <div>
                              <S.Label400>Selecione o EPI:</S.Label400>
                              <S.YoungInput
                                key={i}
                                name="epi"
                                defaultValue={epi[i]}
                                onChange={(evento) =>
                                  handleChangeEpi(evento, i)
                                }
                              >
                                <option value={enums.Epi.Epi}>
                                  {enums.Epi.Epi}
                                </option>
                                <option value={enums.Epi.Epi1}>
                                  {enums.Epi.Epi1}
                                </option>
                                <option value={enums.Epi.Epi2}>
                                  {enums.Epi.Epi2}
                                </option>
                                <option value={enums.Epi.Epi3}>
                                  {enums.Epi.Epi3}
                                </option>
                              </S.YoungInput>
                            </div>
                            <div>
                              <S.Label400>Informe o número do CA:</S.Label400>
                              <S.InputFormatadoCA
                                mask="00-0"
                                key={i}
                                defaultValue={ca[i]}
                                onAccept={(value) => {
                                  handleChangeCa(
                                    {
                                      target: { value }
                                    } as React.ChangeEvent<HTMLInputElement>,
                                    i
                                  )
                                }}
                                onChange={(
                                  evento: React.ChangeEvent<HTMLInputElement>
                                ) => handleChangeCa(evento, i)}
                              />
                            </div>
                            <S.DivMapTrash>
                              <S.OutlineButton
                                onClick={handleAddInputButton}
                                onMouseLeave={() => setTrashEpi(true)}
                                trashEpi={trashEpi}
                              >
                                Adicionar EPI
                              </S.OutlineButton>
                              {trashEpi && (
                                <S.OutlineButtonTrash
                                  onClick={() => handleRemoteField(i)}
                                >
                                  <S.Img src={image.Lixo} alt="" />
                                </S.OutlineButtonTrash>
                              )}
                            </S.DivMapTrash>
                          </S.InternBox>
                        </div>
                      ))}
                    </S.Box>
                    <S.FullButton
                      onClick={handleAddAtividade}
                      onMouseLeave={() => setTrashAtividade(true)}
                      trashAtividade={trashAtividade}
                    >
                      Adicionar outra atividade
                    </S.FullButton>
                  </>
                )}
              </S.Epi>
              <S.BoxAtestado>
                <S.Title>
                  Adicione Atestado de Saúde Ocupacional (opcional):
                </S.Title>
                <S.FileInputContainer>
                  {selectedFile && <S.FileName>{selectedFile.name}</S.FileName>}
                </S.FileInputContainer>
                <S.FileInputLabel>
                  Escolha um arquivo
                  <S.FileInput type="file" onChange={handleFileChange} />
                </S.FileInputLabel>
              </S.BoxAtestado>
              <S.BotaoSalvar type="submit">Salvar</S.BotaoSalvar>
            </S.Body>
          </S.Form>
        </S.Gestao>
      ) : (
        <ListDados
          atualizarInformacao={function (novaInformacao: string): void {
            throw new Error('Function not implemented.')
          }}
        />
      )}
    </>
  )
}
