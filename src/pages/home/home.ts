
import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@IonicPage({name: 'home-page'})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  testi;
  balance:any;
  wallet:number;
  error;
  ticket:number = 2.60;

  // getBalance finction checks local storage and prints the balannce
  getBalance(){
    this.balance = parseFloat(localStorage.getItem("balance"));
    if(this.balance.toString().length >= 5){
      var text = this.balance.toString();
      // console.log(text);
      // text.substring(0,5);
      this.balance = parseFloat(text.substring(0,4));
      // console.log(this.balance);
    }
    if(this.balance <= this.ticket){
      this.error = " ";
    }
  }

  // Buy function is used to buy the lunch ticket.
  // It first checks the balance and then converts it to string to check the length
  // If the string is too long it is trimmed with substring function
  // The trimmed string is then converted back to number and saved to local storage
  // after that the qr code is showed in a modal
  buy(){
    this.balance = parseFloat(localStorage.getItem("balance"));
    if(this.balance < this.ticket){
      this.error = "Please add funds to your wallet to buy a lunch ticket. ";
    }else{
      this.balance -= this.ticket;
      if(this.balance.toString().length >= 5){
        var text = this.balance.toString();
        this.balance = parseFloat(text.substring(0,4));
      }
      localStorage.setItem("balance", this.balance);
      var modalPage = this.modalCtrl.create('qr-page')
      modalPage.present();
    }
  }

  constructor(public navCtrl: NavController, public storage: Storage, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  ionViewDidEnter(){
    console.log("a")
    this.getBalance(); //Executes function when page loads
  }

}
