import { useDispatch } from 'react-redux'
import React, { FormEvent, ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

import * as S from './styles'
import * as enums from '../../utils/enums/CargoAtividade'
import Dado from '../../models/Dado'
import { cadastrar } from '../../store/reducers/dados'
import Lixo from '../../image/lixo.png'

const image = {
  Lixo: Lixo
}

export const Teste = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [trash, setTrash] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [epi, setEpi] = useState<any>([enums.Epi.Epi])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState<any>()
  const [valor, setValor] = useState(enums.estaAtivo.Ativo)
  const [cargo, setCargo] = useState(enums.Cargo.Cargo0)
  const [atividade, setAtividade] = useState(enums.Atividade.Ativ)
  const [sexo, setSexo] = useState(enums.MascFem.Masculino)
  const [rg, setRg] = useState<any>()
  const [nascimento, setNascimento] = useState<any>()
  const [ca, setCa] = useState<any>([''])

  const handleCheckboxChangeLocal = () => {
    setIsChecked(!isChecked)
    setEpi(enums.Epi.Epi)
    setAtividade(enums.Atividade.Ativ)
    setCa('00-0')
  }

  const addInputButton = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setEpi([...epi, enums.Epi.Epi])
  }

  const handleRemoteField = (position: number) => {
    setEpi([...epi.filter((_: any, index: number) => index != position)])
  }

  const handleChangePhone = (
    evento: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    epi[index] = evento.target.value as enums.Epi
    setEpi([...epi])
  }

  const handleChangeCa = (
    evento: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    ca[index] = evento.target.value
    setCa([...ca])
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

  console.log(epi)

  const cadastrarDado = (evento: FormEvent) => {
    Axios.post('http://localhost:3001/register', novoDado).then((response) => {
      console.log(response)
    })

    evento.preventDefault()

    const dadoParaAdicionar = new Dado(
      nome,
      cpf,
      atividade,
      cargo,
      9,
      valor,
      sexo,
      rg,
      nascimento,
      epi,
      ca
    )

    dispatch(cadastrar(dadoParaAdicionar))
    navigate('/')
  }
  return (
    <>
      <S.Gestao>
        <S.Header>
          <S.Voltar to="/">
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
          <S.Epi>
            <S.Title>Quais EPIs o trabalhador usa na atividade?</S.Title>
            <div>
              <S.CheckboxInput
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChangeLocal}
              />
              <S.Label400Span>O trabalhador não usa EPI.</S.Label400Span>
            </div>
            {isChecked ? (
              <></>
            ) : (
              <>
                <S.Box>
                  {epi.map((epi: string[], index: number) => (
                    <div key={index}>
                      <S.InternBox>
                        <div>
                          <S.Label400>Selecione o EPI:</S.Label400>
                          <S.YoungInput
                            name="epi"
                            defaultValue={epi[index]}
                            onChange={(evento) =>
                              handleChangePhone(evento, index)
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
                          {/* <S.InputFormatadoCA
                            mask="00-0"
                            value={ca[index]}
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
                          /> */}
                        </div>
                        <S.DivMapTrash>
                          <S.OutlineButton
                            onClick={addInputButton}
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
          <S.BotaoSalvar type="submit">Salvar</S.BotaoSalvar>
        </S.Form>
      </S.Gestao>
    </>
  )
}
