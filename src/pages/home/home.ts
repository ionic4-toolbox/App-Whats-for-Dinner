import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DialogComponent } from '../../components/dialog/dialog';

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

  ngOnInit(){
    this.storage.get('myMeals').then((meals) => {
        if (! meals) {
          this.displayMeal = `You have not added any meals, you can add them by hitting the plus button.`
        }
    });
  }

  getMeal() {
    this.storage.get('myMeals').then((meals) => {
      if (! meals) {
        return;
      }

      if (meals.length === 1) {
        this.displayMeal = `You have added only one meal: ${meals}`;
        return;
      }

      let newRandomMeal = Math.floor(Math.random() * meals.length);
          while (this.randomMeal === newRandomMeal) {
            newRandomMeal = Math.floor(Math.random() * meals.length);
          }
  
      this.randomMeal = newRandomMeal;
      this.displayMeal = meals[newRandomMeal];
        
    });
  }

  presentModal() {
    const modal = this.modalCtrl.create(DialogComponent);
    modal.onDidDismiss(() => {
      this.storage.get('myMeals').then((meals) => {
        if (meals) {
          this.displayMeal = ``;
        } else if (! meals) {
          this.displayMeal = `You have not added any meals, you can add them by hitting the plus button.`;
        }
      });
    });
    modal.present();
  }

}