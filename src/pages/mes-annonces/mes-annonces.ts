/**
 * Generated class for the MesAnnoncesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

// Import model
import { annonce } from '../../model/annonceModel';
import { userProfil } from '../../model/userProfilModel';

// import pages
import { AddAnnoncesPage } from '../add-annonces/add-annonces';
import { AnnonceDetailPage } from '../annonce-detail/annonce-detail';

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
  public Annonces: annonce[] = [];
  public listAnnonce: any;

  public loader = this.loadingCtrl.create({
    spinner:"bubbles",
    content: "Please wait..." //,
    //duration: 3000
  });


  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private afDatabase: AngularFireDatabase, public loadingCtrl: LoadingController) {
    this.user = this.navParams.get('user');
    this.listAnnonce = this.afDatabase.list('/Annonce', ref => ref.orderByChild('idEmmetteur').equalTo(this.user.uid));
    this.listAnnonce.valueChanges().subscribe((Annon:annonce[]) => {
      Annon.forEach((ann) => {
        this.Annonces.push(ann);
      })
      this.hideLoader();
    });

  }
  removeAnnonce($key: string) {
    this.listAnnonce.remove($key);
  }

  ngOnInit(){
    this.showLoader();
  }

  //Loader 
  showLoader() {
    this.loader.present();
  }

  hideLoader(){
    this.loader.dismiss();
  }

  addAnonce(){
    this.navCtrl.push(AddAnnoncesPage, {user:this.user});
  }

  showAnnonce(annonce) {
    this.navCtrl.push(AnnonceDetailPage, { user: this.user, annonce: annonce })
  }


}
  

  


