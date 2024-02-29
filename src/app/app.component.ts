import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor() {
  
  }

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: "/" },
    { label: 'Formulário de cadastro', link: "cadastro-cliente" },
    { label: 'Lista de clientes cadastrados', link: "lista-cliente" }
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

}
