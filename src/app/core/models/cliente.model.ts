export interface Cliente {
    id: string; /* identificador único do cliente */
    nome: string; /* nome do cliente */
    email: string; /* email do cliente */
    cpf: string; /* CPF do cliente */
    telefone: string; /* telefone do cliente */
    dataCriacao: Date; /* data de criação do cliente */
}