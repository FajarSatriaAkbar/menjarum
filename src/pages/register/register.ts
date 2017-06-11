import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

import {LoginPage} from '../login/login';
import {API} from '../../providers/api';
import {Storage} from '@ionic/storage';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [API]
})
export class RegisterPage {
    data: any;

    constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private api: API,
      public alert: AlertController,
      public loading: LoadingController,
      private http: Http) 
    {
      this.data = {};
      this.data.nama_user = "";
      this.data.email = "";
      this.data.no_telp = "";
      this.data.password = "";
      this.data.peran = "";
    }

    doRegister(){
      let nama_user = this.data.nama_user;
      let email = this.data.email;
      let no_telp = this.data.no_telp;
      let password = this.data.password;
      let peran = this.data.peran;

      let arr = [nama_user, email, no_telp, password, peran];

      let data = JSON.stringify(arr);
      let link = "http://widevlove.com/mobile/API/register.php";

      if(nama_user == "" && email == "" && no_telp == "" && password == "" && peran == ""){
        let alert = this.alert.create({
          title: 'warning',
          subTitle: 'form tidak boleh kosong',
          buttons: ['ok']
        });
        alert.present();
      } 
      else {
        this.http.post(link, data).subscribe(data => {
           console.log(this.data);
          let loader = this.loading.create({
            content: "tunggu yaa..",
            duration: 1000
          });
          loader.present();
          this.navCtrl.setRoot(LoginPage);
        }, error => {
          let alert = this.alert.create({
            title: "warning",
            subTitle: "gagal register",
            buttons: ['ok']
          });
          alert.present();
        });
      }
    }

    doLogin(){
    	this.navCtrl.setRoot(LoginPage);
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad RegisterPage');
    }

}
