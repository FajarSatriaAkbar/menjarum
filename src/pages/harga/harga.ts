import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import {Page1} from '../page1/page1';

/*
  Generated class for the Harga page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-harga',
  templateUrl: 'harga.html'
})
export class HargaPage {
	data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public loading: LoadingController) {
  	let load = this.loading.create({
  		content: 'Mohon Tunggu..',
  		delay: 2000
  	});
  	load.present();
  	this.http.post("http://widevlove.com/mobile/API/daftarHarga.php", "").subscribe(data => {
  		this.data = data.json();
  		console.log(this.data);
  	}, error => {
  		console.log("error");
  	});
  	load.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HargaPage');
  }

  kembali(){
  	this.navCtrl.setRoot(Page1);
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        this.data.push( this.data.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
