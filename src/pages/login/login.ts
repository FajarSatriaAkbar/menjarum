import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, ViewController } from 'ionic-angular';

import {Page1} from '../page1/page1';
import {RegisterPage} from '../register/register';

import {ConnectivityService} from '../../providers/connectivity-service';
import {Storage} from '@ionic/storage';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [ConnectivityService]
})
export class LoginPage {
  data: any;
  public local : Storage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private ViewCtrl: ViewController, private service: ConnectivityService) {
    this.menuCtrl.swipeEnable(false);

    this.data = {};
    this.data.email = "";
    this.data.password = "";
    this.local = new Storage();
  }

  login(){
    let email = this.data.email;
    let password = this.data.password;
    let data = JSON.stringify({email, password});
    this.service.postLogin(data);
  }

  doLogin(){
  	this.navCtrl.setRoot(Page1);
  }

  doRegister(){
  	this.navCtrl.push(RegisterPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
