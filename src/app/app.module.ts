import { ExponentialStrengthPipe } from './../pipes/exponential-strength/exponential-strength';
import { DateTimeHelperPipe } from './../pipes/date-time-helper/date-time-helper';
import { RequestNewWhiskiesPage } from './../pages/request-new-whiskies/request-new-whiskies';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WhiskiesProvider } from '../providers/whiskies/whiskies';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RequestNewWhiskiesPage,
    DateTimeHelperPipe,
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RequestNewWhiskiesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WhiskiesProvider
  ]
})
export class AppModule {}
