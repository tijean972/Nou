import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Pages 
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

// Service
import { AuthService } from '../../services/auth.service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService,
    fb: FormBuilder) {
    // Réception des informations concernant le numéro de tel 
    this.info_tel = this.navParams.get('info');


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
		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.setRoot(HomePage),
        error => {
            this.loginError = error.message;
            console.log(this.loginError);
            this.navCtrl.setRoot(SignupPage, { info: this.info_tel });
        },
        
			);
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
