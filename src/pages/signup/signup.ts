import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Service
import { AuthService } from '../../services/auth.service';

// Pages
import { HomePage } from '../home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  info_tel:any;
  signupError: string;
  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, fb: FormBuilder, private auth: AuthService) {
  
    // Réception des informations concernant le numéro de tel 
    this.info_tel = this.navParams.get('info');


      this.form = fb.group({
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
      });
  }

  signup() {
		let data = this.form.value;
		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signUp(credentials).then(
			() => {
              console.log('Je suis connecté en signup Page');
              this.navCtrl.setRoot(HomePage)
            },
			error => this.signupError = error.message
		);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
