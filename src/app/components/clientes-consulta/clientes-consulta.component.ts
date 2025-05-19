import { Component, inject } from '@angular/core';
import { ClienteService } from '../../core/services/cliente.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { Button, ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-clientes-consulta',
  imports: [
    CommonModule,
    TableModule,
    CardModule,
    ButtonModule
  ],
  templateUrl: './clientes-consulta.component.html',
  styleUrl: './clientes-consulta.component.scss'
})
export class ClientesConsultaComponent {

  //Injeção de dependência do serviço ClienteService
  clienteService = inject(ClienteService);

  //Evento para quando o componente for inicializado
  ngOnInit() {
    //Executando o método para consultar todos os clientes
    this.clienteService.getClientes();
  }

  //Evento para excluir um cliente
  onDelete(id: string) {
    if(confirm('Deseja realmente excluir este cliente?')) {
      this.clienteService.deleteCliente(id);
    }
  }
}
