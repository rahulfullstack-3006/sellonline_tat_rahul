import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SisCalculationComponent } from './sis-calculation.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {path:'',component:SisCalculationComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SisCalculationModule { }
