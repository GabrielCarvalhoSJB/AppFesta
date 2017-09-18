import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ButecoDuPage } from '../buteco-du/buteco-du';
import { CookaRestobarPage } from '../cooka-restobar/cooka-restobar';
/**
 * Generated class for the BaresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bares',
  templateUrl: 'bares.html',

})
export class BaresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BaresPage');
  }

  openPageDu() {
    this.navCtrl.push(ButecoDuPage);
  }

  openPageCooka() {
    this.navCtrl.push(CookaRestobarPage);
  }
}
