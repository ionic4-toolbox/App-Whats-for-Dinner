import { Component } from '@angular/core';
import { NavController, ViewController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'dialog',
    templateUrl: 'dialog.html'
})

export class DialogComponent {

    meal: '';
    items = [];
    displayMeal;

    constructor(public navCtrl: NavController,
                public viewCtrl: ViewController,
                private storage: Storage,
                private alertCtrl: AlertController) {
    }
    
    ngOnInit(){
        this.storage.get('myMeals').then((meals) => {
            this.items = meals;
           }
        );
    }

    saveMeal(val){
        console.log('data added '+ val);
        this.storage.get('myMeals').then((data) => {
            if(data != null) {
            data.push(val);
            this.storage.set('myMeals', data);
            this.items = data;
            } else {
            let array = [];
            array.push(val);
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
                this.storage.clear();
                this.displayMeal = `You have no meals, you can add them by hitting the plus button.`;
                this.items = null;
                }
            }
            ]
        });
        alert.present();
    }

    clearMeal() {
        this.storage.clear();
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}