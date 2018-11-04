import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NativeStorage } from '@ionic-native/native-storage';

// Pages 
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { MesAnnoncesPage } from '../mes-annonces/mes-annonces';

// Service
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  info_tel:any;

  loginForm: FormGroup;
  loginError: string;

  constructor(  public navCtrl: NavController, 
                public navParams: NavParams, 
                private auth: AngularFireAuth,
                public platform: Platform,
                private nativeStorage: NativeStorage,
                fb: FormBuilder
                ) {
    // Réception des informations concernant le numéro de tel 
    if(this.navParams.get('info')){
      this.info_tel = this.navParams.get('info');
    }
    


   this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
		let data = this.loginForm.value;

		if (!data.email) {
			return;
		}

		let credentials = {
			email: data.email,
			password: data.password
    };
    

		this.auth.auth.signInWithEmailAndPassword(credentials.email,
      credentials.password)
			.then(
				() => this.isConnected(),
        error => {
            this.loginError = error.message;
            console.log(this.loginError);

            if(this.navParams.get('info')){
              this.navCtrl.setRoot(SignupPage, { info: this.info_tel });
            } else{
              this.navCtrl.setRoot(SignupPage);
            }
            
        },
        
			);
  }


  isConnected(){
    this.platform.ready().then(() => {
      this.auth.authState.subscribe(
        (user) => {
              if (user){

                if (this.platform.is('android') || this.platform.is('ios')) {
                    this.nativeStorage.setItem('Utilisateur', { user: user})
                    .then(
                    () => console.log('Utilisateur est enregistré dans le Native Storage!'),
                    error => console.error(" L'utilisateur n'a pas été enregistré:", error)
                  );
                }
                //console.log('On est dans la page login:' + user.toJSON() )
                //console.log(user.toJSON());
                this.navCtrl.setRoot(MesAnnoncesPage, { user:user})
              } else {
                console.log('On est pas connecté');
                this.navCtrl.setRoot(SignupPage);
              }
        })
     })
    }

  goSignup(){
    console.log(this.info_tel);
    this.navCtrl.push(SignupPage, { info: this.info_tel })
  }

  goForgotPassword(){
    console.log(this.info_tel);
    this.navCtrl.push(ForgotPasswordPage)
  }
  

}
