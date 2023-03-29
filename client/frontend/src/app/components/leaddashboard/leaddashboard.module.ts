import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {Routes,RouterModule} from '@angular/router';
import { LeaddashboardComponent } from './leaddashboard.component';

const routes:Routes=[
  {path:'',component:LeaddashboardComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)
  ]
})
export class LeaddashboardModule { 
  constructor(){
    console.log("leaddashboard");
    
  }
}
