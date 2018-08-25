import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Page 
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { MesAnnoncesPage } from '../mes-annonces/mes-annonces';

// Service
import { AuthService } from '../../services/auth.service';

// Traduction
import { TranslateService } from '@ngx-translate/core';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userInfo:any ={};
  lang:any;

  constructor(public navCtrl: NavController, private auth: AuthService, public translate: TranslateService) {
    this.lang = 'en';
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  switchLanguage() {
    this.translate.use(this.lang);
  }

  

  register(){
    (<any>window).AccountKitPlugin.loginWithPhoneNumber({
      useAccessToken: true,
      defaultCountryCode: "FR",
      facebookNotificationsEnabled: true,
    }, data => {
        (<any>window).AccountKitPlugin.getAccount(
          info => this.navCtrl.setRoot(LoginPage,{
            info : info
          }),
          err => console.log(err));
    });
  }

  ionViewDidLoad() {
    //this.isConnected();
  }
  
  isConnected(){
    this.auth.afAuth.authState.subscribe(
      (user) => {
        if (user){
          console.log(user.toJSON());
          console.log('on est connecté');
          //this.navCtrl.setRoot(MesAnnoncesPage);
          
        } else {
          console.log('On est pas connecté');
          this.navCtrl.setRoot(SignupPage);
        }
      },
      (error) => {console.log("On a une erreur d'authentification en home page")}
    )
  }
}
