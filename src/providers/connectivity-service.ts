import { Injectable } from '@angular/core';
import { Network } from 'ionic-native';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/observable";
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';

declare var Connection;

/*
  Generated class for the ConnectivityService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ConnectivityService {
  onDevice: boolean;

  public local : Storage;
  mydata: any;

  constructor(public platform: Platform, public http: Http) {
  	this.onDevice = this.platform.is('cordova');
    this.local = new Storage();
  }

  postLogin(data){
    let link = "linknya";
    return this.http.post(link, data).map(data => {
      this.mydata = data;
      console.log("data");
    }, error => {
      console.log(error);
    });
  }

  isOnline(): boolean {
  	if(this.onDevice && Network.type){
  		return Network.type !== Connection.NONE;
  	} else {
  		return navigator.onLine;
  	}
  }

  ifOffline(): boolean{
  	if(this.onDevice && Network.type){
  		return Network.type === Connection.NONE;
  	} else {
  		return !navigator.onLine;
  	}
  }

}
