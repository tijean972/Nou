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

// import pages
import { AddAnnoncesPage } from '../add-annonces/add-annonces';

// Base de données
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, SubscriptionLike, PartialObserver } from 'rxjs';
import {EmptyObservable} from 'rxjs/observable/EmptyObservable';

@IonicPage()
@Component({
  selector: 'page-mes-annonces',
  templateUrl: 'mes-annonces.html',
})

export class MesAnnoncesPage {

  //private Annonces: AngularFireList<any>;
  private user: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private afDatabase: AngularFireDatabase) {
    this.user = this.navParams.get('user');
    const listAnnonce = this.afDatabase.list('/Annonce', ref => ref.orderByChild('idEmmetteur').equalTo(this.user.uid));
    const Annonces = listAnnonce.valueChanges();
    Annonces.subscribe(console.log);
    //this.afDatabase.list<annonce>('/Annonce').valueChanges().subscribe(console.log);
    //console.log("c'est le user:" + JSON.stringify(this.user));
    console.log("Tableau annonces:" + JSON.stringify(Annonces));
  }

  ngOnInit(){
  }

  addAnonce(){
    this.navCtrl.setRoot(AddAnnoncesPage, {user:this.user});
  }


}
  

  


