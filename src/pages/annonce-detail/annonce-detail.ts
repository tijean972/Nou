import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Import model
import { annonce } from '../../model/annonceModel';
import { userProfil } from '../../model/userProfilModel';

/**
 * Generated class for the AnnonceDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-annonce-detail',
  templateUrl: 'annonce-detail.html',
})
export class AnnonceDetailPage {

  private annonceSelect: annonce;
  private user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.annonceSelect = this.navParams.get('annonce');
    this.user = this.navParams.get('user');
    console.log(this.annonceSelect);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnonceDetailPage');
  }

}
