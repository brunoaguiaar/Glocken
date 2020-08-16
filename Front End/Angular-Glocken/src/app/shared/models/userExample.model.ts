export interface UserExamples {
  fullName: string,
  address: string,
  gender: number,
  cpf: number,
  rg: number,
  birthday: string,
  email: string,
  phone: number,
  emergencyPhone: number,
  job: string,
  contract: number,
  type: number
}

export const USER_LIST: UserExamples[] = [
  {
    fullName: 'Rodolfo Soares Spier',
    address: 'Rua Teste, Bairro Teste 700',
    gender: 1,
    cpf: 11111111111,
    rg: 111111111,
    birthday: '12/06/1999',
    email: 'rodolfo.spier@gmail.com',
    phone: 5199999999,
    emergencyPhone: 5199999999,
    job: 'Engenheiro de Software',
    contract: 2,
    type: 1
  },
  {
    fullName: 'Marcelo Bueno',
    address: 'Rua Teste, Bairro Teste 800 - Apartamento',
    gender: 1,
    cpf: 11111111111,
    rg: 111111111,
    birthday: '12/06/1828',
    email: 'marcelo.jesus@gmail.com',
    phone: 5199999999,
    emergencyPhone: 5199999999,
    job: 'Engenheiro Civil',
    contract: 1,
    type: 1
  }
]