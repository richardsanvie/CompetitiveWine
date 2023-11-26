import React, { useEffect, FormEvent, ChangeEvent, useState } from 'react'

import * as S from './styles'
import { useDispatch } from 'react-redux/es/exports'
import { remover, editar } from '../../store/reducers/dados'
import * as enums from '../../utils/enums/CargoAtividade'
import Axios from 'axios'
import Dado from '../../models/Dado'
import Lixo from '../../image/lixo.png'

const image = {
  Lixo: Lixo
}

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
  const [trash, setTrash] = useState(false)

  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState(cpfOriginal)
  const [cargo, setCargo] = useState(cargoOriginal)
  const [atividade, setAtividade] = useState(atividadeOriginal)
  const [valor, setValor] = useState(valorOriginal)
  const [sexo, setSexo] = useState(sexoOriginal)
  const [rg, setRg] = useState(rgOriginal)
  const [nascimento, setNascimento] = useState(nascimentoOriginal)
  const [epi, setEpi] = useState<any>(epiOriginal)
  const [ca, setCa] = useState<any>(caOriginal)
  const [phones, setPhones] = useState<any>([''])

  const [selectedFile, setSelectedFile] = useState<File | null>(null)

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
    setEpi([enums.Epi.Epi])
    setAtividade(enums.Atividade.Ativ)
    setCa('00-0')
  }

  useEffect(() => {
    if (epi[0] === enums.Epi.Epi) {
      setIsChecked(true)
    } else {
      setIsChecked(false)
    }
  }, [epi[0], enums])

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

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files

    if (files && files.length > 0) {
      setSelectedFile(files[0])
    }
  }

  const handleAddInputButton = (e: { preventDefault: () => void }) => {
    if (epi.length < 3) {
      e.preventDefault()
      setEpi([...epi, ['']])
    }
  }

  const handleChangeEpi = (
    evento: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    setEpi((prevEpi: any) => {
      const newEpi = [...prevEpi]
      newEpi[index] = evento.target.value
      return newEpi
    })
    epi[index] = evento.target.value as enums.Epi
    setEpi([...epi])
  }

  const handleRemoteField = (position: number) => {
    if (epi.length > 1) {
      setEpi([...epi.filter((_: any, index: number) => index !== position)])
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

  return (
    <S.Form onSubmit={handlePageLoading}>
      <S.BodyEdit>
        <S.AtivoOuInativo>
          <div>
            <S.ButtonRemove onClick={handleDelete}>Remover</S.ButtonRemove>
          </div>
          <S.AtivoOuInativoRemoveEdit>
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
          </S.AtivoOuInativoRemoveEdit>
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
                <S.Label400>Selecione a atividade:</S.Label400>
                <S.FullInput
                  name="epi"
                  defaultValue={atividade}
                  onChange={(evento) =>
                    setCargo(evento.target.value as enums.Cargo)
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
                {epi.map((phone: string, index: number) => (
                  <div key={index}>
                    <S.InternBox>
                      <div>
                        <S.Label400>Selecione o EPI:</S.Label400>
                        <S.YoungInput
                          key={index}
                          name="epi"
                          defaultValue={epi[index]}
                          onChange={(evento) => handleChangeEpi(evento, index)}
                        >
                          <option value={enums.Epi.Epi}>{enums.Epi.Epi}</option>
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
                          key={index}
                          defaultValue={ca[index]}
                          onAccept={(value) => {
                            handleChangeCa(
                              {
                                target: { value }
                              } as React.ChangeEvent<HTMLInputElement>,
                              index
                            )
                          }}
                          onChange={(
                            evento: React.ChangeEvent<HTMLInputElement>
                          ) => handleChangeCa(evento, index)}
                        />
                      </div>
                      <S.DivMapTrash>
                        <S.OutlineButton
                          onClick={handleAddInputButton}
                          onMouseLeave={() => setTrash(true)}
                          trash={trash}
                        >
                          Adicionar EPI
                        </S.OutlineButton>
                        {trash && (
                          <S.OutlineButtonTrash
                            onClick={() => handleRemoteField(index)}
                          >
                            <S.Img src={image.Lixo} alt="" />
                          </S.OutlineButtonTrash>
                        )}
                      </S.DivMapTrash>
                    </S.InternBox>
                  </div>
                ))}
              </S.Box>
              <S.FullButton>Adicionar outra atividade</S.FullButton>
            </>
          )}
        </S.Epi>
        <S.BoxAtestado>
          <S.Title>Adicione Atestado de Saúde Ocupacional (opcional):</S.Title>
          <S.FileInputContainer>
            {selectedFile && <S.FileName>{selectedFile.name}</S.FileName>}
          </S.FileInputContainer>
          <S.FileInputLabel>
            Escolha um arquivo
            <S.FileInput type="file" onChange={handleFileChange} />
          </S.FileInputLabel>
        </S.BoxAtestado>
      </S.BodyEdit>
    </S.Form>
  )
}

export default EditaUsuario
