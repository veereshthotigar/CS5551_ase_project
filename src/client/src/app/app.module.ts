import { MbscModule } from '@mobiscroll/angular';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler, NavController, NavParams } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ChatPage } from '../pages/chat/chat';
import { DialogUserComponent } from '../pages/dialog-user/dialog-user.component';
import { EventsHomePage } from '../pages/events-home/events-home';
import { EventsRegisterPage } from '../pages/events-register/events-register';
import { EventsJoinPage } from '../pages/events-join/events-join';
import { EventPage } from '../pages/event/event';
import { ReportsPage } from '../pages/reports/reports';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetailsPage } from '../pages/details/details';

//firebase
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from "angularfire2";

//barcodescanner
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { MaterialModule } from '../shared/material/material.module';
import { SocketService } from '../shared/services/socket.service';

//reports
import { ChartsModule } from 'ng2-charts';
// Initialize Firebase
export const firebaseConfig =
{
  // insert config here
  apiKey: "AIzaSyAzZT0RI1MQf--tTBp_AQ7qwr0wcMuXJG8",
    authDomain: "myapp-ceed1.firebaseapp.com",
    databaseURL: "https://myapp-ceed1.firebaseio.com",
    projectId: "myapp-ceed1",
    storageBucket: "myapp-ceed1.appspot.com",
    messagingSenderId: "822624922951"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    AboutPage,
    ChatPage,
    DetailsPage,
    DialogUserComponent,
    EventsHomePage,
    EventsRegisterPage,
    EventsJoinPage,
    EventPage,
    ReportsPage,
    TabsPage
  ],
  imports: [ 
    MbscModule, 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ChartsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    AboutPage,
    ChatPage,
    DetailsPage,
    DialogUserComponent,
    EventsHomePage,
    EventsRegisterPage,
    EventsJoinPage,
    EventPage,
    ReportsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera, 
    SocketService,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

}
