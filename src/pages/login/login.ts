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

  // check if balance exists in local storage
  // if it does not exist insert a value of 0
  // otherwise getItem will get a value of NaN
  checkStorage(){
    if(localStorage.getItem("balance") === null){
      localStorage.setItem("balance", "0");
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.checkStorage();
  }

}
