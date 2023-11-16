import * as enums from '../utils/enums/CargoAtividade'

class Dado {
  nome: string
  cpf: string
  atividade: enums.Atividade
  cargo: enums.Cargo
  idsea: number
  valor: enums.estaAtivo
  sexo: enums.MascFem
  rg: string
  nascimento: string
  epi: enums.Epi
  ca: string

  constructor(
    nome: string,
    cpf: string,
    atividade: enums.Atividade,
    cargo: enums.Cargo,
    idsea: number,
    valor: enums.estaAtivo,
    sexo: enums.MascFem,
    rg: string,
    nascimento: string,
    epi: enums.Epi,
    ca: string
  ) {
    this.nome = nome
    this.cpf = cpf
    this.atividade = atividade
    this.cargo = cargo
    this.idsea = idsea
    this.valor = valor
    this.sexo = sexo
    this.rg = rg
    this.nascimento = nascimento
    this.epi = epi
    this.ca = ca
  }
}

export default Dado
