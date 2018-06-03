import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuscaPage } from '../busca/busca';
import { ResultadosPage } from '../resultados/resultados';
import { SolicitacaoPage } from '../solicitacao/solicitacao';

@Component({
  selector: 'page-passageiro',
  templateUrl: 'passageiro.html'
})
export class PassageiroPage {

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
  }goToSolicitacao(params){
    if (!params) params = {};
    this.navCtrl.push(SolicitacaoPage);
  }
  
}
