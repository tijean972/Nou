/**
 * Generated class for the MesAnnoncesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Import model
import { annonce } from '../../model/annonceModel';
import { userProfil } from '../../model/userProfilModel';

//import service
import { AnnonceListService } from '../../services/AnnonceService';

// import pages
import { AddAnnoncesPage } from '../add-annonces/add-annonces';


@IonicPage()
@Component({
  selector: 'page-mes-annonces',
  templateUrl: 'mes-annonces.html',
})

export class MesAnnoncesPage {

  private MesAnnonce: any = {};
  private user: userProfil;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private AnnonceServ: AnnonceListService ) {
    this.user = this.navParams.get('user');
    console.log("c'est le user:" + JSON.stringify(this.user));
    console.log(this.MesAnnonce);
  }

  ngOnInit(){
  }

  addAnonce(){
    this.navCtrl.setRoot(AddAnnoncesPage, {user:this.user});
  }


}
  

  


