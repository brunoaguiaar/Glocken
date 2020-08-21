export interface UserExamples {
  fullName: string,
  address: string,
  gender: number,
  cpf: string,
  rg: string,
  birthday: string,
  email: string,
  phone: string,
  emergencyPhone: string,
  job: string,
  contract: number,
  type: number
}

export const USER_LIST: UserExamples[] = [
  {
    fullName: 'Rodolfo Soares Spier',
    address: 'Rua Teste, Bairro Teste 700',
    gender: 1,
    cpf: '123.123.131-22',
    rg: '21.312.321-32',
    birthday: '12/06/1999',
    email: 'rodolfo.spier@gmail.com',
    phone: '(51) 95633-3444',
    emergencyPhone: '(51) 95633-3677',
    job: 'Engenheiro de Software',
    contract: 2,
    type: 1
  },
  {
    fullName: 'Marcelo Bueno',
    address: 'Rua Teste, Bairro Teste 800 - Apartamento',
    gender: 1,
    cpf: '123.123.131-22',
    rg: '21.312.321-32',
    birthday: '03/02/1998',
    email: 'marcelo.jesus@gmail.com',
    phone: '(51) 99991-2341',
    emergencyPhone: '(51) 92391-2666',
    job: 'Engenheiro Civil',
    contract: 1,
    type: 1
  }
]