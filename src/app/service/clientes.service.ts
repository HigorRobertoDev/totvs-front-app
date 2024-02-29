import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url: string = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  salvar( cliente: Cliente ) : Observable<Cliente> {
    return this.http.post<Cliente>(this.url, cliente);
  }

  buscarClientes() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }

  // buscarClientes() : Cliente[] {

  //   let cliente = {} as Cliente;
  //   cliente.nome = "Higão de Guararema";
  //   cliente.endereco = "Rua Dona Clarinda";
  //   cliente.bairro = "Itaoca";
  //   cliente.telefones = ["(11) 99999-9999", "(11) 99999-9998"];

  //   return [cliente, cliente, cliente , cliente];
  // }

}
