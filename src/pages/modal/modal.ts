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

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl : ViewController) {
   
  }
  closeModal(){
    const data = {
      name : 'john doe',
      occupation : 'Milkman'
    }
    this.viewCtrl.dismiss(data);
  }
  ionViewWillLoad(){
    const data = this.navParams.get('data')
    console.log(data)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

}
