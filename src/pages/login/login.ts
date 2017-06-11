import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, ViewController, AlertController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

import {Page1} from '../page1/page1';
import {RegisterPage} from '../register/register';

import {ConnectivityService} from '../../providers/connectivity-service';
import {API} from '../../providers/api';
import {Storage} from '@ionic/storage';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [ConnectivityService, API]
})
export class LoginPage {
    data: any;
    public local : Storage;

    constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      public menuCtrl: MenuController, 
      private ViewCtrl: ViewController, 
      private service: ConnectivityService,
      public alert: AlertController,
      public loading: LoadingController,
      private http: Http,
      private api: API) 
    {
      this.menuCtrl.swipeEnable(false);

      this.data = {};
      this.data.email = "";
      this.data.password = "";
      this.local = new Storage();
    }
    sementaraLogin(){
      this.navCtrl.setRoot(Page1);
    }

    doLogin(){
    let email = this.data.email;
    let password = this.data.password;

    let data = JSON.stringify(email, password);
    let link = "http://widevlove.com/mobile/API/login.php";
    if(email == "" && password == ""){
      let alert = this.alert.create({
        title: 'warning',
        subTitle: 'email dan password harus di isi',
        buttons: ['oke']
      });
      alert.present();
    } 
    else {
      this.http.post(link, data).subscribe(data=> {
      console.log(this.data);
      let loader = this.loading.create({
        content: "tunggu yaa......",
        duration: 1000
      })
      loader.present();
      this.navCtrl.setRoot(Page1);
      },fffff => {
        let alert = this.alert.create({
          title: 'Warning',
          subTitle: 'email sama password salah',
          buttons: ['oke']
        });
        alert.present();
      });
    }
  }

    doRegister(){
    	this.navCtrl.push(RegisterPage);
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad LoginPage');
    }

}
