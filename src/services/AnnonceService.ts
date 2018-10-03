

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { QueryFn } from 'angularfire2/database/interfaces';
import { annonce } from '../model/annonceModel';
import { userProfil } from '../model/userProfilModel';
 
@Injectable()
export class AnnonceListService {
 
    private dbPath = '/Annonce';
    annonceRef: AngularFireList<annonce> = null;
    
    
    constructor(private db: AngularFireDatabase) { 
        this.annonceRef = this.db.list(this.dbPath);
    }
 
    getAnnonceList():AngularFireList<annonce> {
        return this.annonceRef;
    }
 
    createAnnonce(Annonce: annonce) {
        return this.annonceRef.push(Annonce);
    }
 
    updateAnnonce(Annonce: annonce) {
        return this.annonceRef.update(Annonce.idAnnonce, Annonce);
    }
 
    removeAnnonce(Annonce: annonce) {
        return this.annonceRef.remove(Annonce.idAnnonce);
    }
}