import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-meal',
  templateUrl: 'meal.html',
})
export class MealPage {

  meal: '';
  ingredient: '';
  ingredients = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private storage: Storage) {
                
    this.meal = navParams.data.meal.name;
    
  }

  ionViewWillEnter() {
      this.storage.get('myMeals').then((data) => {
        let array = data;
        let index = array.findIndex(item => item.name === this.meal);
        this.ingredients = array[index].ingredients;
      }
    );
  }

  confirmDelete() {
    let alert = this.alertCtrl.create({
      title: `Delete ${this.meal}`,
      message: `Are you sure you want to delete ${this.meal}?`,
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
            this.storage.get('myMeals').then((data) => {
              let array = data;
              let index = array.findIndex(
                (item => item.name === this.meal)
              );
              array.splice(index, 1);
              this.storage.set('myMeals', array);
            });
            this.navCtrl.pop();
          }
      }
      ]
    });
    alert.present();
  }

  addIngredient(ingredient) {
    this.storage.get('myMeals').then((data) => {
      let array = data;
      let index = array.findIndex(item => item.name === this.meal);
      if (array[index].hasOwnProperty('ingredients')) {
        array[index].ingredients.push({name:ingredient});
        this.storage.set('myMeals', array);
        this.ingredients = array[index].ingredients;
      } else {
        array[index].ingredients = [{name:ingredient}];
        this.storage.set('myMeals', array);
        this.ingredients = array[index].ingredients;
      }
    });
    this.ingredient = '';
  }

}
