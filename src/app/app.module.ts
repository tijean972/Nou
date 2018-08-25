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

// Ionic - Cordova
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Base de donnéé
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth'

// Service
import { userProflService } from '../services/UserProfilService';
import { AuthService } from '../services/auth.service';



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
}



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ForgotPasswordPage,
    MesAnnoncesPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(Enrironnement.firebase),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ForgotPasswordPage,
    MesAnnoncesPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    userProflService,
    AngularFireAuth,
    AuthService
  ]
})
export class AppModule {}
