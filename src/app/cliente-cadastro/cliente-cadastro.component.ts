import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';

import { PoDynamicModule, PoTableModule } from '@po-ui/ng-components';
import { ClientesService } from '../service/clientes.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClientesService) { }

  ngOnInit(): void {

    this.clienteService.buscarClientes().subscribe(
      resposta => this.clientes = resposta
    )
  }

}
