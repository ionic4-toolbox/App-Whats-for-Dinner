import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'dialog',
    templateUrl: 'dialog.html'
})

export class DialogComponent {

    meal: '';

    constructor(public navCtrl: NavController,
                public viewCtrl: ViewController,
                private storage: Storage) {
                }

    saveMeal(val){
        console.log('data added '+ val);
        this.storage.get('myMeals').then((data) => {
            if(data != null) {
            data.push(val);
            this.storage.set('myMeals', data);
            } else {
            let array = [];
            array.push(val);
            this.storage.set('myMeals', array);
            }
        });
        this.meal = '';
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}