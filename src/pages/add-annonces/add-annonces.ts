import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Import model
import { annonce } from '../../model/annonceModel';
import { userProfil } from '../../model/userProfilModel';

//import service
import { AnnonceListService } from '../../services/AnnonceService';

// import pages
import { MesAnnoncesPage } from '../mes-annonces/mes-annonces';

/**
 * Generated class for the AddAnnoncesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-annonces',
  templateUrl: 'add-annonces.html',
})
export class AddAnnoncesPage {
  private user: any;
  public Annonce: annonce;
  loginForm: FormGroup;
  loginError: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private AnnonceServ: AnnonceListService, fb: FormBuilder) {
    this.user = this.navParams.get('user');
    


    /*idAnnonce: string;
    idEmmetteur: string;
    title: string;
    categorie: [string];
    competenceRequise: [string];
    Message: string;
    nbLike: number;
*/

    this.loginForm = fb.group({
			Message: ['', Validators.compose([Validators.required, Validators.maxLength(150)])],
			title: ['', Validators.compose([Validators.required, Validators.maxLength(30)])]
    });
    
  }

  btnSubmit(){
    //this.Annonce = this.loginForm.value;
    
    this.Annonce = 
                    {
                      idAnnonce:'',
                      title: this.loginForm.value.title,
                      Message: this.loginForm.value.Message,
                      createAnnonce: "string",
                      idEmmetteur: this.user.uid //'M82ZkPCvkHXZGPuunt03myghqbQ2' // 
                    }

    
    console.log(this.Annonce);
    this.AnnonceServ.createAnnonce(this.Annonce).then(ref => {
      this.navCtrl.setRoot(MesAnnoncesPage, {user: this.user});
    })
    
  }

  Annuler(){
    this.navCtrl.setRoot(MesAnnoncesPage, {user: this.user});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAnnoncesPage');
  }

}
