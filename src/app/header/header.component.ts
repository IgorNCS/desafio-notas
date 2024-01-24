import { Component } from '@angular/core';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private listaServico:ListaService
  ){}

}
