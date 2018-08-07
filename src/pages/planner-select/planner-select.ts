import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-planner-select',
  templateUrl: 'planner-select.html',
})

export class PlannerSelectPage {

  day: '';
  meal: '';
  meals;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private storage: Storage) {
    
    this.day = navParams.data.day.name;
  }

  ionViewWillEnter() {
    this.storage.get('daysOfWeek').then((data) => {
      let array = data;
      let index = array.findIndex(item => item.name === this.day);
      if (array[index].hasOwnProperty('meal')) {
        this.meal = array[index].meal;
      } else {
        this.storage.get('myMeals').then((data) => {
          this.meals = data;
        });
      }
    });
  }

  setMeal(meal) {
    this.storage.get('daysOfWeek').then((data) => {
      let days = data;
      let day = days.findIndex(item => item.name === this.day);
      if (!days[day].hasOwnProperty('meal')) {
        days[day].meal = meal.name;
        this.storage.set('daysOfWeek', days);
      }
    });
    this.navCtrl.pop();
  }

  

}
