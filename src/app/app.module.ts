import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage }  from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ListPage } from '../pages/list/list';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { MesAnnoncesPage } from '../pages/mes-annonces/mes-annonces';
import { AddAnnoncesPage } from '../pages/add-annonces/add-annonces';

// Ionic - Cordova
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Base de donnéé
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';


// Service
import { userProflService } from '../services/UserProfilService';
import { AuthService } from '../services/auth.service';

// Module traduction
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

//DAO
import { AnnonceListService } from '../services/AnnonceService';


// Déclaration firebase 
const Enrironnement = {
  production: false,
  firebase: {
    apiKey: "AIzaSyABNP1lo1xoL7zjAsnT_PVdTpbA_NH3hk4",
    authDomain: "yucom-681ef.firebaseapp.com",
    databaseURL: "https://yucom-681ef.firebaseio.com",
    projectId: "yucom-681ef",
    storageBucket: "yucom-681ef.appspot.com",
    messagingSenderId: "814152405605"
  }
};


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ForgotPasswordPage,
    MesAnnoncesPage,
    AddAnnoncesPage,
    ListPage
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(Enrironnement.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ForgotPasswordPage,
    MesAnnoncesPage,
    AddAnnoncesPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    userProflService,
    AngularFireAuth,
    AuthService,
    AnnonceListService
  ]
})
export class AppModule {}
