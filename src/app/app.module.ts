import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import {DesainPage} from '../pages/desain/desain';
import {PembayaranPage} from '../pages/pembayaran/pembayaran';
import {PencarianPage} from '../pages/pencarian/pencarian';
import {TransaksiPage} from '../pages/transaksi/transaksi';
import {AboutPage} from '../pages/about/about';

import {ConnectivityService} from '../providers/connectivity-service';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    RegisterPage,
    DesainPage,
    PembayaranPage,
    PencarianPage,
    TransaksiPage,
    AboutPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    RegisterPage,
    DesainPage,
    PembayaranPage,
    PencarianPage,
    TransaksiPage,
    AboutPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ConnectivityService]
})
export class AppModule {}
