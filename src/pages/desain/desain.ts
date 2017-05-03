import { Component, ViewChild, NgModule, ElementRef } from '@angular/core';
import { NavController, NavParams, Slides, Platform } from 'ionic-angular';
import { ConnectivityService } from '../../providers/connectivity-service';
import { Geolocation } from 'ionic-native';

declare var google;

/*
  Generated class for the Desain page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-desain',
  templateUrl: 'desain.html'
})
export class DesainPage {
  	@ViewChild('mySlider') slider: Slides;
  	@ViewChild('map') mapElement: ElementRef;

  	map: any;
  	mapInitialised: boolean = false;
  	apikey: any;

  	metode: string = "pilih1";
  	isAndroid: boolean = false;

  	onSlideChanged(){
  		let previousIndex = this.slider.getPreviousIndex();
  	}

  	onSlideMove(ev: any){

  	}

  	goToPrevSlide(){
  		this.slider.slidePrev();
  	}

  	goToNextSlide(){
  		this.slider.slideNext();
  	}

  	constructor(public connectivityService: ConnectivityService, public navCtrl: NavController, public navParams: NavParams, platform: Platform) {
  		this.isAndroid = platform.is('android');
      this.loadGoogleMaps();
  	}

  	disableMap(){
  		console.log("disable map");
  	}

  	enableMap(){
  		console.log("enable map");
  	}

  	initMap(){
  		this.mapInitialised = true;

  		Geolocation.getCurrentPosition().then((position) => {
  			let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  			let mapOptions = {
  				center: latLng,
  				zoom: 15,
  				mapTypeId: google.maps.MapTypeId.ROADMAP
  			}

  			this.map = new google.maps.map(this.mapElement.nativeElement, mapOptions);
  		});
  	}

  	loadGoogleMaps(){
  		if(typeof google == "undefined" || typeof google.maps == "undefined"){
  			console.log("not loaded");
  			this.disableMap();

  			if(this.connectivityService.isOnline()){
  				console.log("online");

  				window['mapInit'] = () => {
  					this.initMap();
  					this.enableMap();
  				}

  				let script = document.createElement("script");
  				script.id = "googleMaps";

  				if(this.apikey){
  					script.src = 'http://maps.google.com/maps/api/js?key=AIzaSyDHLnbO2TEoWrKmR6xXEqGwqRG4EU8EKZU' + this.apikey + '&callback=mapInit';
            console.log('berhasil');
  				} else {
  					script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
            console.log('gagal');
  				}
  				document.body.appendChild(script);
  			}
  		} else {
  			if(this.connectivityService.isOnline()){
  				console.log("showing map");
  				this.initMap();
  				this.enableMap();
  			} else {
  				console.log("disabling map");
  				this.disableMap();
  			}
  		}
  	}

  	addConnectivityListeners(){
  		let onOnline = () => {
  			setTimeout(() => {
  				if(typeof google == "undefined" || typeof google.maps == "undefined"){
  					this.loadGoogleMaps();
  				} else {
  					if(!this.mapInitialised){
  						this.initMap();
  					}

  					this.enableMap();
  				}
  			}, 2000);
  		};

  		let onOffline = () => {
  			this.disableMap();
  		};

  		document.addEventListener('online', onOnline, false);
  		document.addEventListener('offline', onOffline, false);
  	}
}
