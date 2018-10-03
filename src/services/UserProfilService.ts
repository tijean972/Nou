

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { userProfil } from '../model/userProfilModel';
 
@Injectable()
export class userProflService {
 
    private userProfilData = this.db.list<userProfil>('UserProfil');
 
    constructor(private db: AngularFireDatabase) { }
 
    getProfil() {
        return this.userProfilData;
    }
 
    addNote(profil: userProfil) {
        return this.userProfilData.push(profil);
    }
 
    updateNote(profil: userProfil) {
        return this.userProfilData.update(profil.Userid, profil);
    }
 
    removeNote(profil: userProfil) {
        return this.userProfilData.remove(profil.Userid);
    }
}