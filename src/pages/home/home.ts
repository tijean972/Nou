import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userInfo:any ={};

  constructor(public navCtrl: NavController) {

  }


  register(){
    (<any>window).AccountKitPlugin.loginWithPhoneNumber({
      useAccessToken: true,
      defaultCountryCode: "FR",
      facebookNotificationsEnabled: true,
    }, data => {
        (<any>window).AccountKitPlugin.getAccount(
          info => this.userInfo = info,
          err => console.log(err));
    });
  }
  

}
