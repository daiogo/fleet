import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ResultadosPage } from '../pages/resultados/resultados';
import { PassageiroPage } from '../pages/passageiro/passageiro';
import { PerfilPage } from '../pages/perfil/perfil';
import { TransladosPage } from '../pages/translados/translados';
import { ResumoPage } from '../pages/resumo/resumo';
import { BuscaPage } from '../pages/busca/busca';
import { WelcomePage } from '../pages/welcome/welcome';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = WelcomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToBusca(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BuscaPage);
  }goToResultados(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ResultadosPage);
  }goToPassageiro(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PassageiroPage);
  }goToPerfil(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PerfilPage);
  }goToTranslados(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TransladosPage);
  }goToResumo(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ResumoPage);
  }goToWelcome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(WelcomePage);
  }
  
}
