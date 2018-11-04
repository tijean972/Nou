import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

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

  constructor(public navCtrl: NavController, public translate: TranslateService, private afAuth: AngularFireAuth, private nativeStorage: NativeStorage) {
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
          info => this.navCtrl.setRoot(SignupPage,{
            info : info
          }),
          err => console.log(err));
    });
  }

  ionViewDidLoad() {
    //this.isConnected();
  }
  ngOnInit(){
    console.log('on est connecté HomePage');
    this.isConnected();
  }
  
  isConnected(){
    this.afAuth.authState.subscribe(
      (user) => {
        if (user){
          this.nativeStorage.setItem('Utilisateur', { user: user})
          .then(
            () => console.log('Utilisateur est enregistré dans le Native Storage!'),
            error => console.error(" L'utilisateur n'a pas été enregistré:", error)
          );
          //console.log(user.toJSON());
          
          this.navCtrl.setRoot(MesAnnoncesPage, { user:user})

        } else {
          console.log('On est pas connecté');
          this.navCtrl.setRoot(SignupPage);
        }
      })
  }

}
