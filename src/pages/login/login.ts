import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({name: 'login-page'})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  nextPage = 'tabs-page';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
