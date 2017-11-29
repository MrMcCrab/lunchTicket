import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({name: 'tabs-page'})
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1root = 'home-page';
  tab2root = 'add-page';

  balance:any = 4;

  getBalance(){
    this.balance = localStorage.getItem("balance");
  }


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  ionViewDidEnter(){
    console.log("b");
    // this.getBalance();
  }

}
