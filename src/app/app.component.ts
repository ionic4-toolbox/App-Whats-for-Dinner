import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { TabsComponent } from '../components/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsComponent;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              private storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleLightContent();
      splashScreen.hide();
      
      this.storage.get('versionNumber').then((version) => {
        if (!version) {
          this.storage.get('myMeals').then((data) => {
            if (data) {
              const newData = data.map(meal => {
                return { name: meal }
              });
              this.storage.set('myMeals', newData);
            }
          });
          let versionNumber = '1.1'
          this.storage.set('versionNumber', versionNumber);
        }
      });
      
    });
  }
}

