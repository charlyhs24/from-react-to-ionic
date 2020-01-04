import { WhiskiesProvider } from './../../providers/whiskies/whiskies';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  list_of_whiskies:any;
  list_name_of_whiskies = []
  master_whiskies:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     private viewCtrl : ViewController,
     private whiskiesProvider: WhiskiesProvider) {
      this.getListOfWhiskies()
  }
  closeModal(){
    const data = {
      name : 'john doe',
      occupation : 'Milkman'
    }
    this.viewCtrl.dismiss(data);
  }
  itemClicked(name){
    console.log(name)
  }
  searchWhiskies(ev:any){
    this.resetChanges();
    const query = ev.target.value
    this.list_of_whiskies = this.list_of_whiskies.filter((response) => {
      return (response.name.toLowerCase().indexOf(query.toLowerCase()) > -1 )
    })
    console.log("now")
    console.log(this.list_of_whiskies)
  }
  resetChanges(){
    this.list_of_whiskies = this.master_whiskies
    console.log("reset")
  }
  getListOfWhiskies(){
    this.whiskiesProvider.getWhiskiesFromApi()
    .subscribe((response) => {
      this.master_whiskies = response
      this.list_of_whiskies = response
      
    })
  }
  ionViewWillLoad(){
        // this.whiskiesProvider.getWhiskiesFromApi()
        // .subscribe((response) => {
        //   console.log(response)
        //   this.list_of_whiskies = response
        //   for (const item of response){
        //     this.list_name_of_whiskies.push(item.name)
        //   } 
        // })
    const data = this.navParams.get('data')
    console.log(data)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

}
