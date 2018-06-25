import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DialogComponent } from '../../components/dialog/dialog';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  randomMeal;
  displayMeal;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              private storage: Storage,
              private alertCtrl: AlertController) {

  }

  getMeal() {
    this.storage.get('myMeals').then((meals) => {
      this.randomMeal = Math.floor(Math.random() * meals.length);
      this.displayMeal = meals[this.randomMeal];
      console.log(meals[this.randomMeal]);
    });
  }

  clearMeal() {
    this.storage.clear();
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
            console.log('cancel');
          }
        },
        {
          text: 'Delete',
          role: 'delete',
          handler: () => {
            console.log('delete');
            this.storage.clear();
          }
        }
      ]
    });
    alert.present();
  }

  presentModal() {
    const modal = this.modalCtrl.create(DialogComponent);
    modal.present();
  }

}