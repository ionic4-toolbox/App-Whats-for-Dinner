import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { CreditsPage } from '../credits/credits';
import { MealPage } from '../meal/meal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  randomMeal = null;
  displayMeal = null;
  lastRandom;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              private storage: Storage) {
  }

  toCredits() {
    this.navCtrl.push(CreditsPage);
  }

  ionViewWillEnter(){
    this.storage.get('myMeals').then((meals) => {
        if (!meals || meals.length === 0) {
          this.displayMeal = `You have not added any meals, you can add them by hitting the plus button.`
        } else {
          this.displayMeal = '';
        }
    });
  }

  getMeal() {
    this.storage.get('myMeals').then((meals) => {
      if (!meals || meals.length === 0) {
        return;
      }

      if (meals.length === 1) {
        this.displayMeal = `You have added only one meal: ${meals[0].name}`;
        return;
      }

      let newRandomMeal = Math.floor(Math.random() * meals.length);
          while (this.randomMeal === newRandomMeal) {
            newRandomMeal = Math.floor(Math.random() * meals.length);
          }
  
      this.randomMeal = newRandomMeal;
      this.displayMeal = meals[newRandomMeal].name;
    });
  }

  selectMeal(displayMeal) {
    
    this.storage.get('myMeals').then((data) => {
      let array = data;
      let index = array.findIndex(
        (item => item.name === displayMeal)
      );
      this.navCtrl.push(MealPage, {
        meal: array[index]
      });
    });

  }

}