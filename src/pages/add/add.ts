import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({name: 'add-page'})
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  balance:number;
  funds:any;
  item:any;

  // Add function is used to add the selected amount on money to balannce
  // Amount of money is also checked for length and trimmed with substring if necessary
  // Balance is then printed below add button
  add(){
    this.item = parseFloat(localStorage.getItem("balance"));
    if(this.funds == null){
      this.funds = 0;
    }
    this.item += parseFloat(this.funds);
    if(this.item.toString().length >= 5){
      var text = this.item.toString();
      this.item = parseFloat(text.substring(0,4));
      console.log(this.item);
    }
    localStorage.setItem("balance", this.item);
    this.balance = this.item;
    console.log("added funds");
    // this.navCtrl.push('tabs-page');
  }

  getBalance(){
    this.balance = parseFloat(localStorage.getItem("balance"));
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  ionViewDidEnter(){
    console.log("a")
    this.getBalance();
  }

}
