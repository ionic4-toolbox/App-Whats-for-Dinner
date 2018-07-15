import { Component } from '@angular/core';

import { HomePage } from '../../pages/home/home';
import { PlannerPage } from '../../pages/planner/planner';
import { MealsPage } from '../../pages/meals/meals';

@Component({
    templateUrl: 'tabs.html'
})

export class TabsComponent {
    tab1Root = HomePage;
    tab2Root = PlannerPage;
    tab3Root = MealsPage;
}