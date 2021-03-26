import { Component } from '@angular/core';
import { Pessoa } from './pessoa';
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cnpj: string
  pessoa: Pessoa

  constructor(
    private AppService: AppService
  ) { }

  consultarCNPJ() {
    this.AppService.consultarCNPJ(this.cnpj)
      .subscribe(value => this.pessoa = value)
  }

}
