import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-planner',
  templateUrl: 'planner.html',
})
export class PlannerPage {

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {
  }

}
