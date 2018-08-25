

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { userProfl } from '../model/userProfilModel';
 
@Injectable()
export class userProflService {
 
    private userProfilData = this.db.list<userProfl>('UserProfil');
 
    constructor(private db: AngularFireDatabase) { }
 
    getProfil() {
        return this.userProfilData;
    }
 
    addNote(profil: userProfl) {
        return this.userProfilData.push(profil);
    }
 
    updateNote(profil: userProfl) {
        return this.userProfilData.update(profil.Userid, profil);
    }
 
    removeNote(profil: userProfl) {
        return this.userProfilData.remove(profil.Userid);
    }
}