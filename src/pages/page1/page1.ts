import { Component } from '@angular/core';

import { NavController, MenuController } from 'ionic-angular';
import {DesainPage} from '../desain/desain';
import {PencarianPage} from '../pencarian/pencarian';
import {TransaksiPage} from '../transaksi/transaksi';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  dataSlide = [{image: "assets/icon/home.jpg"},{image: "assets/icon/home.jpg"},{image: "assets/icon/home.jpg"}]
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
    this.menuCtrl.swipeEnable(false);
  }

  mulaiJahit(){
  	this.navCtrl.push(DesainPage);
  }
  pencarian(){
  	this.navCtrl.push(PencarianPage);
  }
  transaksi(){
  	this.navCtrl.push(TransaksiPage);
  }

}
