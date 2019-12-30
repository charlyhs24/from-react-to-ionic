import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestNewWhiskiesPage } from './request-new-whiskies';

@NgModule({
  declarations: [
    RequestNewWhiskiesPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestNewWhiskiesPage),
  ],
})
export class RequestNewWhiskiesPageModule {}
