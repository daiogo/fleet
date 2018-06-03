import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BuscaPage } from '../pages/busca/busca';
import { ResultadosPage } from '../pages/resultados/resultados';
import { TransladosPage } from '../pages/translados/translados';
import { ConvitePage } from '../pages/convite/convite';
import { ResumoPage } from '../pages/resumo/resumo';
import { PassageiroPage } from '../pages/passageiro/passageiro';
import { PerfilPage } from '../pages/perfil/perfil';
import { WelcomePage } from '../pages/welcome/welcome';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    BuscaPage,
    ResultadosPage,
    TransladosPage,
    ConvitePage,
    ResumoPage,
    PassageiroPage,
    PerfilPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BuscaPage,
    ResultadosPage,
    TransladosPage,
    ConvitePage,
    ResumoPage,
    PassageiroPage,
    PerfilPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}