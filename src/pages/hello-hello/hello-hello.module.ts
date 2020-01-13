import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelloHelloPage } from './hello-hello';

@NgModule({
  declarations: [
    HelloHelloPage,
  ],
  imports: [
    IonicPageModule.forChild(HelloHelloPage),
  ],
})
export class HelloHelloPageModule {}
