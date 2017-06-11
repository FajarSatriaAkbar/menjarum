import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {LoginPage} from '../pages/login/login';
import {PembayaranPage} from '../pages/pembayaran/pembayaran';
import {HargaPage} from '../pages/harga/harga';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Beranda', component: Page1, icon: "md-home" },
      { title: 'Tentang', component: Page2, icon: "md-contact"},
      { title: 'Blog', component: Page1, icon: "md-list-box" },
      { title: 'Daftar Harga', component: HargaPage, icon: "md-pricetag"},
      { title: 'Konfirmasi Pembayaran', component: PembayaranPage, icon: "md-cash" },
      { title: 'Pengaturan', component: Page2, icon: "md-cog"},
      { title: 'Informasi', component: Page1, icon: "md-alert" }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
