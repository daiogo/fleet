import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultadosPage } from '../resultados/resultados';
import { PassageiroPage } from '../passageiro/passageiro';
import { PerfilPage } from '../perfil/perfil';

@Component({
  selector: 'page-busca',
  templateUrl: 'busca.html'
})
export class BuscaPage {

  constructor(public navCtrl: NavController) {
  }
  goToResultados(params){
    if (!params) params = {};
    this.navCtrl.push(ResultadosPage);
  }goToPassageiro(params){
    if (!params) params = {};
    this.navCtrl.push(PassageiroPage);
  }goToBusca(params){
    if (!params) params = {};
    this.navCtrl.push(BuscaPage);
  }
}
