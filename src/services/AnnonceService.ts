
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
//import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { annonce } from '../model/annonceModel';
//import { userProfil } from '../model/userProfilModel';
 
@Injectable()
export class AnnonceListService {
 
    Annonces: Observable<annonce[]>;
    annonceCollectionRef: AngularFirestoreCollection<annonce>;
    
    
    constructor() { 
        
    }
 
    getAnnonceList() {
        return this.Annonces;
    }
 
    createAnnonce(Annonce: annonce) {
        return this.annonceCollectionRef.add(Annonce);
    }
 
    updateAnnonce(Annonce: annonce) {
        return this.annonceCollectionRef.doc(Annonce.idAnnonce).update({Annonce});
    }
 
    removeAnnonce(Annonce: annonce) {
        return this.annonceCollectionRef.doc(Annonce.idAnnonce).delete();
    }
}


//npm install rxjs@6.0 rxjs-compat --save