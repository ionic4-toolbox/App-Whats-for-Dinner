import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { Keyboard } from '@ionic-native/keyboard';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PlannerPage } from '../pages/planner/planner';
import { MealsPage } from '../pages/meals/meals';
import { DialogComponent } from '../components/dialog/dialog';
import { TabsComponent } from '../components/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlannerPage,
    MealsPage,
    DialogComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlannerPage,
    MealsPage,
    DialogComponent,
    TabsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
