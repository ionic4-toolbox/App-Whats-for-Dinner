import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private storage: Storage) {

  }
  mealNumber;
  myMeals = ['Pizza', 'Quiche', 'Noodles', 'Salad', 'Rice with meatballs', 'Chili sin carne'];

  getMeal() {
    this.mealNumber = Math.floor(Math.random() * this.myMeals.length);
  }

}