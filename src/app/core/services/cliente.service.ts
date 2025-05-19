import { inject, Injectable, signal } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Cliente } from "../models/cliente.model";

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    //Atributo para armazenar o endpoint da API
    private endpoint = `${environment.apiUrl}/clientes`;

    //Atributo para inicializar o HttpClient
    private http = inject(HttpClient);

    //Atributo para armazenar os clientes
    private clientes = signal<Cliente[]>([]);

    //Atributo público para retornar os clientes
    //que foram capturados na API e armazenados no Signal
    listagemClientes = this.clientes.asReadonly();

    //Método para obter todos os clientes da API
    //e armazená-los no atributo clientes (Signal)
    getClientes() {
        this.http.get<Cliente[]>(this.endpoint) //consultando os clientes da API
            .subscribe( //aguardando a resposta
                (response) => { //captura a resposta
                    //atualiza o atributo clientes com a resposta (preenchendo o Signal)
                    this.clientes.set(response);
                }
            );
    }

    //Método para adicionar um cliente na API
    addCliente(cliente: Cliente) {
        return this.http.post<Cliente>(this.endpoint, cliente) //enviando o cliente para a API
            .subscribe( //aguardando a resposta
                (response) => { //capturando a resposta
                    //atualiza o atributo clientes com a resposta (adicionando o cliente)
                    this.clientes.update((data) => [...data, response]);
                }
            );
    }

    //Método para excluir um cliente na API
    deleteCliente(id: string) {
        return this.http.delete<Cliente>(`${this.endpoint}/${id}`) //excluindo o cliente da API
            .subscribe( //aguardando a resposta
                () => { //capturando a resposta
                    //atualiza o atributo clientes com a resposta (removendo o cliente
                    this.clientes.update((data) => data.filter((item) => item.id !== id));
                });
    }
}