import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

import {PembayaranPage} from '../pembayaran/pembayaran';

/*
  Generated class for the Transaksi page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-transaksi',
  templateUrl: 'transaksi.html'
})
export class TransaksiPage {
    transaksi: string = "pilih1";
    isAndroid: boolean = false;

    constructor(
      public navCtrl: NavController, 
      platform: Platform, 
      public navParams: NavParams) 
    {
    	this.isAndroid = platform.is('android');
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad TransaksiPage');
    }

    konfirmasiPembayaran(){
    	this.navCtrl.push(PembayaranPage);
    }

}
