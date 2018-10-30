/**
 * Generated class for the AddAnnoncesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';

// Import model
import { annonce } from '../../model/annonceModel';
import { userProfil } from '../../model/userProfilModel';


// import pages
import { MesAnnoncesPage } from '../mes-annonces/mes-annonces';

// Base de données
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, SubscriptionLike, PartialObserver } from 'rxjs';
import {EmptyObservable} from 'rxjs/observable/EmptyObservable';



@IonicPage()
@Component({
  selector: 'page-add-annonces',
  templateUrl: 'add-annonces.html',
})
export class AddAnnoncesPage {
  private user: any;
  public annonces:any;
  public addAnnonce: any;

  // Image annonce
  public task: AngularFireUploadTask;
  public progress: any;  // Observable 0 to 100
  public image: string; // base64

  // Formulaire
  loginForm: FormGroup;
  loginError: string;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public afs: AngularFireDatabase, fb: FormBuilder, private storage: AngularFireStorage,
    private camera: Camera) {

    this.user = this.navParams.get('user');
    //console.log(this.user);
    this.annonces = this.afs.list('/Annonce');
    this.addAnnonce = this.annonces.push({});

    this.loginForm = fb.group({
			Message: ['', Validators.compose([Validators.required, Validators.maxLength(150)])],
			title: ['', Validators.compose([Validators.required, Validators.maxLength(30)])]
    });
  }

  btnSubmit(){
    //this.Annonce = this.loginForm.value;
    //'M82ZkPCvkHXZGPuunt03myghqbQ2' // 

    this.annonces.push(
              {
                idAnnonce:'',
                title: this.loginForm.value.title,
                Message: this.loginForm.value.Message,
                createAnnonce: '', 
                idEmmetteur: this.user.uid,
                categorie: [''],
                competenceRequise: [''],
                nbLike:0
              }
    );
    this.navCtrl.setRoot(MesAnnoncesPage, {user: this.user});
  }

  Annuler(){
    this.navCtrl.setRoot(MesAnnoncesPage, {user: this.user});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAnnoncesPage');
  }

  async captureImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    }
    return await this.camera.getPicture(options)
  }

  createUploadTask(file: string): void {
    const filePath = `my-pet-crocodile_${new Date().getTime()}.jpg`;
    this.image = 'data:image/jpg;base64,' + file;
    this.task = this.storage.ref(filePath).putString(this.image, 'data_url');
    this.progress = this.task.percentageChanges();
  }

  async uploadHandler() {
    const base64 = await this.captureImage();
    this.createUploadTask(base64);
  }

}
