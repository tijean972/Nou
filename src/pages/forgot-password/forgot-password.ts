import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Service
import { AuthService } from '../../services/auth.service';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  loginForm: FormGroup;
  loginError: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService, fb: FormBuilder) {
    this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])]
    });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

  forgotPassword(){
    this.auth.resetPassword("arnaudmiredin@gmail.com")
    .then(() => {
      console.log("c'est parti !!");
      setTimeout(() => {
        this.navCtrl.setRoot(LoginPage);
      }, 2000);
      

    })
    .catch((error) => console.log(error))
  }

}
