import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Page 
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { MesAnnoncesPage } from '../mes-annonces/mes-annonces';

// Service
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

// Traduction
import { TranslateService } from '@ngx-translate/core';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userInfo:any ={};
  lang:any;

  constructor(public navCtrl: NavController, public translate: TranslateService, private afAuth: AngularFireAuth) {
    this.lang = 'mada';
    this.translate.setDefaultLang('mada');
    this.translate.use('mada');
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
  ngOnInit(){
    this.isConnected();
  }
  
  isConnected(){
    this.afAuth.authState.subscribe(
      (user) => {
        if (user){
          //console.log(user.toJSON());
          console.log('on est connecté HomePage');
          //this.navCtrl.setRoot(MesAnnoncesPage);
          
        } else {
          console.log('On est pas connecté');
          this.navCtrl.setRoot(SignupPage);
        }
      })
  }

}
