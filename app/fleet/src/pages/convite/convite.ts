import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuscaPage } from '../busca/busca';
import { ResultadosPage } from '../resultados/resultados';
import { PassageiroPage } from '../passageiro/passageiro';

@Component({
  selector: 'page-convite',
  templateUrl: 'convite.html'
})
export class ConvitePage {

  constructor(public navCtrl: NavController) {
  }
  goToBusca(params){
    if (!params) params = {};
    this.navCtrl.push(BuscaPage);
  }goToResultados(params){
    if (!params) params = {};
    this.navCtrl.push(ResultadosPage);
  }goToPassageiro(params){
    if (!params) params = {};
    this.navCtrl.push(PassageiroPage);
  }
}
