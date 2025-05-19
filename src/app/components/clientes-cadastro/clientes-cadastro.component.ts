import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from '../../core/services/cliente.service';
import { Cliente } from '../../core/models/cliente.model';
import { v4 as uuid } from 'uuid';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-clientes-cadastro',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    MessageModule,
    MessagesModule
  ],
  templateUrl: './clientes-cadastro.component.html',
  styleUrl: './clientes-cadastro.component.scss'
})
export class ClientesCadastroComponent {

  //Injeções de dependência
  private formBuilder = inject(FormBuilder);
  private clienteService = inject(ClienteService);

  //Formulário de cadastro
  formCadastro = this.formBuilder.group({
    nome: new FormControl(''),
    cpf: new FormControl(''),
    email: new FormControl(''),
    telefone: new FormControl('')
  });

  //Método para cadastrar cliente
  onSubmit() {

    //Capturar os dados do formulário
    const cliente: Cliente = {
      id: uuid(),
      nome: this.formCadastro.get('nome')?.value as string,
      cpf: this.formCadastro.get('cpf')?.value as string,
      email: this.formCadastro.get('email')?.value as string,
      telefone: this.formCadastro.get('telefone')?.value as string,
      dataCriacao: new Date()
    }

    //Realizando o cadastro do cliente
    this.clienteService.addCliente(cliente);
    
    //Resetando o formulário
    this.formCadastro.reset();

    //Exibindo mensagem de sucesso
    alert('Cliente cadastrado com sucesso!');
  }
}
