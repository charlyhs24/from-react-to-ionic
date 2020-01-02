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
  public time = {
    start_date : '',
    expired_date : '',
    time_start : '',
    time_end : '',
    time_duration : {
      hours : null,
      minute : null
    },
    duration : null
  }
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public whiskiesProvider : WhiskiesProvider,
    public alertCtrl : AlertController,
    public loadingCtrl : LoadingController) {

  }
  changeDateHandler(e:any){
    this.presentLoading()
    this.generateDurationByTime()
    console.log(this.time)
    this.whiskiesProvider.getWhiskiesFromApiByDate(this.time)
    .subscribe((response) => {
      console.log(response[0])
      
      this.loading.dismiss();
      this.time.duration = this.generateDurationByDay()
      this.whiskies.name = response[0].name
      this.whiskies.origin = response[0].origin
    }, (error) => {
      console.log(error)
      this.showErrorAlert(error.statusText)
      this.loading.dismiss()
    })
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
  generateDurationByDay(){
    const formula = 24*60*60*1000;
    const start_date = new Date(this.time.start_date)
    const end_date = new Date(this.time.expired_date)
    return Math.round(Math.round((end_date.getTime() - start_date.getTime())/formula))
  }
  generateDurationByTime(){
    let start_time = this.time.time_start.split(":")
    let end_time = this.time.time_end.split(":")
    this.time.time_duration.hours = (parseInt(end_time[0]) - parseInt(start_time[0]))  
    this.time.time_duration.minute = (parseInt(end_time[1]) - parseInt(start_time[1]))
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestNewWhiskiesPage');
  }


}
