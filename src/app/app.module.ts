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
import { PlannerSelectPage } from '../pages/planner-select/planner-select';
import { MealsPage } from '../pages/meals/meals';
import { MealPage } from '../pages/meal/meal';
import { CreditsPage } from '../pages/credits/credits';
import { TabsComponent } from '../components/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlannerPage,
    PlannerSelectPage,
    MealsPage,
    MealPage,
    CreditsPage,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlannerPage,
    PlannerSelectPage,
    MealsPage,
    MealPage,
    CreditsPage,
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
