import { Component, OnInit, Input } from '@angular/core';

import {
  PoFieldModule, PoButtonModule, PoInfoModule, PoListViewModule 
} from '@po-ui/ng-components';
import { Cliente } from '../models/cliente';
import { ClientesService } from '../service/clientes.service';
import { Telefone } from '../models/telefone';
import { ItemTela } from '../models/itemTela';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css']
})
export class FormularioClienteComponent implements OnInit {

  cliente = {} as Cliente;
  telefoneCliente = {} as Telefone;
  telefonesCliente: Telefone[] = [];
  success: boolean = false;
  errorService: boolean = false;
  quantidade: number = 0;

  itensTela: ItemTela[] = [];

  constructor(private clienteService: ClientesService) { }

  limparTela() {
    this.cliente = {} as Cliente;
    this.telefonesCliente = [];
    this.quantidade = 0;
    this.itensTela = [];
  }

  onSubmit() {

    let telefonesTela: string[] = [];

    this.itensTela.forEach(obj => {
      telefonesTela.push(obj.telefone)
    });

    this.cliente.telefones = telefonesTela;

    console.log(this.cliente);

    this.clienteService.salvar(this.cliente)
      .subscribe(response => {
        this.success = true;
        this.errorService = false;
        this.limparTela();
      }, error => {
        this.success = false;
        this.errorService = true;
      })
  }



  ngOnInit(): void {

  }

  addTelefone(): void {
    this.quantidade = this.quantidade + 1;

    let itemTela: ItemTela = { name: 'Registro ' + this.quantidade, telefone: this.cliente.telefone };

    this.itensTela.push(
      itemTela
    );
  }

}
