import { WhiskiesProvider } from './../../providers/whiskies/whiskies';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Loading, LoadingController } from 'ionic-angular';

/**
 * Generated class for the RequestNewWhiskiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request-new-whiskies',
  templateUrl: 'request-new-whiskies.html',
})
export class RequestNewWhiskiesPage {
  loading : Loading = null;
  public whiskies = {
    name : '',
    origin: ''
  }
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public whiskiesProvider : WhiskiesProvider,
    public alertCtrl : AlertController,
    public loadingCtrl : LoadingController) {

  }
  onSubmit(){
    this.presentLoading();
    this.whiskiesProvider.setNewWhiskies(this.whiskies)
    .subscribe((response) => {
      this.showSuccessAlert();
      this.loading.dismiss()
    }, (error) => {
      this.showErrorAlert(error.statusText)
      this.loading.dismiss();
    })
  }
  showSuccessAlert(){
    const alert = this.alertCtrl.create({
      title : 'Success',
      subTitle : 'Whiskies has been created !',
      buttons : ['OK']
    });
    alert.present()
  }
  showErrorAlert(error){
    const alert = this.alertCtrl.create({
      title : 'Fail request new whiskies :(',
      subTitle : error,
      buttons : ['OK']
    });
    alert.present()
  }
  presentLoading(){
    this.loading = this.loadingCtrl.create({
      content: "Please wait...",
      showBackdrop : true,
    })
    return this.loading.present()
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestNewWhiskiesPage');
  }


}
