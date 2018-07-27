import { Component } from '@angular/core';
import { NavController, ViewController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MealPage } from '../meal/meal';

@Component({
  selector: 'page-meals',
  templateUrl: 'meals.html',
})

export class MealsPage {

  meal: '';
  items = [];

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    private storage: Storage,
    private alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
    this.storage.get('myMeals').then((meals) => {
      this.items = meals;
    }
  );
  }

  saveMeal(val){
    this.storage.get('myMeals').then((data) => {
        if(data != null) {
        data.push({ name:val });
        this.storage.set('myMeals', data);
        this.items = data;
        } else {
        let array = [];
        array.push({ name: val });
        this.storage.set('myMeals', array);
        this.items = array;
        }
    });
    this.meal = '';
  }

  confirmDelete() {
    let alert = this.alertCtrl.create({
        title: 'Delete all meals?',
        message: 'Are you sure you want to delete all saved meals?',
        buttons: [
        {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
            }
        },
        {
            text: 'Delete',
            role: 'delete',
            handler: () => {
            this.storage.remove('myMeals');
            this.items = null;
            }
        }
        ]
    });
    alert.present();
  }

  selectMeal(meal) {
    this.navCtrl.push(MealPage, {
      meal: meal
    })
  }

}
