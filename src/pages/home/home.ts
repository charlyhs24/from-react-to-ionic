import { WhiskiesProvider } from './../../providers/whiskies/whiskies';
import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController, Loading  } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  whiskies:any;
  items :any;
  loading: Loading = null;
  constructor(public navCtrl: NavController, 
    public whiskiesProvider : WhiskiesProvider,
    public loadingCtrl : LoadingController) {
    this.presentLoading();
    this.getWhiskies();
  }
  getWhiskiesResult(ev:any){
    this.getWhiskies();
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.whiskies = this.whiskies.filter((item) => {
        if(item.name.toLowerCase().indexOf(val.toLowerCase()) >= 0){
          return true;
        }
      })
      console.log(this.whiskies)
    }
  }
  getWhiskies(){
    this.whiskiesProvider.getWhiskiesFromApi()
    .subscribe((response) => {
      this.whiskies = response
      this.loading.dismiss();
    }, (error) =>{
      console.log(error)
    })
  }
  viewHandler(){

  }
  presentLoading(){
    this.loading = this.loadingCtrl.create({
      content: "Please wait...",
      showBackdrop : true,
    })
    return this.loading.present()
  }
}