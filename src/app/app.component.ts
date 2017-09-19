import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Login } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BaresPage } from '../pages/bares/bares';
import {ButecoDuPage} from '../pages/buteco-du/buteco-du';

import firebase from 'firebase';
import { ContactPage } from '../pages/contact/contact';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    
  rootPage:any = Login;
  pages: Array<{title: string, component: any}>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

      // Initialize Firebase
      var config = {
          apiKey: "AIzaSyCvvSQqYSSWBBBiaFZBN_5t-Oe5zFzDP9o",
          authDomain: "auth-7ba82.firebaseapp.com",
          databaseURL: "https://auth-7ba82.firebaseio.com",
          projectId: "auth-7ba82",
          storageBucket: "auth-7ba82.appspot.com",
          messagingSenderId: "739485368266"
      };
      firebase.initializeApp(config);
     
    
      firebase.auth().onAuthStateChanged((user) => {

          if (!user) {
              console.log("not login");
              this.rootPage = Login;


          } else {
              console.log("login");
              this.rootPage = HomePage;
              this.pages = [
                { title: 'Home', component: HomePage },
                { title: 'Atrações', component: ListPage },
                { title: 'Bares', component: BaresPage }
              ];
          }
         
      });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
   
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
