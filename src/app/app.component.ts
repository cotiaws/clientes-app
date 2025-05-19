import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientesCadastroComponent } from './components/clientes-cadastro/clientes-cadastro.component';
import { ClientesConsultaComponent } from './components/clientes-consulta/clientes-consulta.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ClientesCadastroComponent,
    ClientesConsultaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clientes-app';
}
