import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/*
  Generated class for the API provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class API {
	mydata: any;
	public local: Storage;

	constructor(public http: Http) {
		this.local = new Storage();
	}

	userLogin(data){
	    let link = "linknya";
	    return this.http.post(link, data).map(data => {
	      this.mydata = data;
	      console.log("data");
	    }, error => {
	      console.log(error);
	    });
	  }

  userRegister(data){
    let link = "http://widevlove.com/mobile/API/register.php";
    return this.http.post(link, data).map(data => {
      this.mydata = data;
      console.log("data");
    }, error => {
      console.log(error);
    });
  }

  userProfil(data){
    let link = "linknya";
    return this.http.post(link, data).map(data => {
      this.mydata = data;
      console.log("data");
    }, error => {
      console.log(error);
    });
  }

  orderJahit(data){
    let link = "linknya";
    return this.http.post(link, data).map(data => {
      this.mydata = data;
      console.log("data");
    }, error => {
      console.log(error);
    });
  }

  allCategory(data){
    let link = "linknya";
    return this.http.post(link, data).map(data => {
      this.mydata = data;
      console.log("data");
    }, error => {
      console.log(error);
    });
  }

  slider(data){
  	let link = "linknya";
  	return this.http.post(link, data).map(data => {
  		this.mydata = data;
  		console.log("data");
  	}, error => {
  		console.log(error);
  	});
  }


}
