import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResumoPage } from '../resumo/resumo';

@Component({
  selector: 'page-translados',
  templateUrl: 'translados.html'
})
export class TransladosPage {

  constructor(public navCtrl: NavController) {
  }
  goToResumo(params){
    if (!params) params = {};
    this.navCtrl.push(ResumoPage);
  }
}
