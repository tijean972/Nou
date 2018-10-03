import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
//import AuthProvider = firebase.auth.AuthProvider;

@Injectable()
export class AuthService {

	constructor(public afAuth: AngularFireAuth) {
	}

	

	signInWithEmail(credentials) {
		console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
	}

	signUp(credentials) {
		return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
	}

	resetPassword(email: string) {
		return this.afAuth.auth.sendPasswordResetEmail(email);
		  
	}

	
 
}