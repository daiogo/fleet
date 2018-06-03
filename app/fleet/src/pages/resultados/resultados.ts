import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PassageiroPage } from '../passageiro/passageiro';
import { BuscaPage } from '../busca/busca';

@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html'
})
export class ResultadosPage {

  constructor(public navCtrl: NavController) {
  }
  goToPassageiro(params){
    if (!params) params = {};
    this.navCtrl.push(PassageiroPage);
  }goToBusca(params){
    if (!params) params = {};
    this.navCtrl.push(BuscaPage);
  }
}
