import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UploadPage } from '../pages/upload/upload';

// Angular firebase2
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyCTngyqq3YUza13IpKAekk45dUJt2ioxjY",
  authDomain: "mr-baguette.firebaseapp.com",
  databaseURL: "https://mr-baguette.firebaseio.com",
  projectId: "mr-baguette",
  storageBucket: "mr-baguette.appspot.com",
  messagingSenderId: "687249478305"

};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UploadPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UploadPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
