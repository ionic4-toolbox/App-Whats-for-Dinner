import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { PlannerSelectPage } from '../planner-select/planner-select';

@Component({
  selector: 'page-planner',
  templateUrl: 'planner.html',
})
export class PlannerPage {

  days = [];
  day = '';
  meal = '';

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              private storage: Storage) {
  }

  ionViewWillEnter() {
    this.storage.get('daysOfWeek').then((data) => {
      if (data) {
        this.days = data;
      } else {
        this.storage.set('daysOfWeek', [
          { name: 'Monday' },
          { name: 'Tuesday' },
          { name: 'Wednesday' },
          { name: 'Thursday' },
          { name: 'Friday' },
          { name: 'Saturday' },
          { name: 'Sunday' }
        ]);
      }
    });
  }

  setMeal(day) {
    this.navCtrl.push(PlannerSelectPage, {
      day: day
    });
  }

}
