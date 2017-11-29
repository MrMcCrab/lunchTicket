import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({name: 'qr-page'})
@Component({
  selector: 'page-qr',
  templateUrl: 'qr.html',
})
export class QrPage {

  home(){
    this.navCtrl.setRoot('tabs-page');
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrPage');
  }

}
