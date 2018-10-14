import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Pages
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { MesAnnoncesPage } from '../pages/mes-annonces/mes-annonces';
import { AddAnnoncesPage } from '../pages/add-annonces/add-annonces';

// Service
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage; //MesAnnoncesPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private afAuth: AngularFireAuth) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Login page', component: LoginPage },
      { title: 'Sign Up', component: SignupPage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      if(this.platform.is('android') || this.platform.is('ios')){
        this.statusBar.styleDefault();
         this.splashScreen.hide();
         
      }
      this.afAuth.authState.subscribe(user => {
        if(user){
          this.nav.setRoot(MesAnnoncesPage, {user:user});
        } else{
          this.nav.setRoot(HomePage);
        }
     });

      
      
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
