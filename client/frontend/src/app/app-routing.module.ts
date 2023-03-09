import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditleadComponent } from './components/editlead/editlead.component';
import { LeadcreationComponent } from './components/leadcreation/leadcreation.component';
import { LeaddashboardComponent } from './components/leaddashboard/leaddashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProductdashboardComponent } from './components/productdashboard/productdashboard.component';
import { RegsiterComponent } from './components/regsiter/regsiter.component';
import { SisCalculationComponent } from './components/sis-calculation/sis-calculation.component';
import { SisRiderCalculationComponent } from './components/sis-rider-calculation/sis-rider-calculation.component';
import { SisRiderSelectionComponent } from './components/sis-rider-selection/sis-rider-selection.component';
import { SisSummaryComponent } from './components/sis-summary/sis-summary.component';
import { SispersonalComponent } from './components/sispersonal/sispersonal.component';

const routes: Routes = [
  {
    path:'',
    component:RegsiterComponent,
    children:[
      {
        path:'register',
        loadChildren:()=>
        import('./components/regsiter/register.module').then((m)=>m.RegisterModule)
      }
    ]
  },
  {
    path:'login',
    component:LoginComponent,
    children:[
      {
        path:'login',
        loadChildren:()=>
          import('./components/login/login.module').then((m)=>m.LoginModule)
      },  
    ]  
  },

  {
    path:'leadCreation',
    component:LeadcreationComponent,
    children:[
      {
        path:'leadCreation',
        loadChildren:()=>
          import('./components/leadcreation/leadcreation.module').then((m)=>m.LeadcreationModule)
      },  
    ]  
  },

  {
    path:'leadEdit',
    component:EditleadComponent,
    children:[
      {
        path:'leadEdit',
        loadChildren:()=>
          import('./components/editlead/editlead.module').then((m)=>m.EditleadModule)
      },  
    ]  
  },

  {
    path:'leadDashboard',
    component:LeaddashboardComponent,
    children:[
      {
        path:'leadDashboard',
        loadChildren:()=>
        import('./components/leaddashboard/leaddashboard.module').then((m)=>m.LeaddashboardModule)
      }
    ]
  },

  {
    path:'productDashboard',
    component:ProductdashboardComponent,
    children:[
      {
        path:'productDashboard',
        loadChildren:()=>
        import('./components/productdashboard/productdashboard.module').then((m)=>m.ProductdashboardModule)
      }
    ]
  },

  {
    path:'sisPersonal',
    component:SispersonalComponent,
    children:[
      {
        path:'sisPersonal',
        loadChildren:()=>
        import('./components/sispersonal/sispersonal.module').then((m)=>m.SispersonalModule)
      }
    ]
  },
  {
    path:'sisCalculation',
    component:SisCalculationComponent,
    children:[
      {
        path:'sisCalculation',
        loadChildren:()=>
        import('./components/sis-calculation/sis-calculation.module').then((m)=>m.SisCalculationModule)
      }
    ]
  },
  {
    path:'sisRiderSelection',
    component:SisRiderSelectionComponent,
    children:[
      {
        path:'sisRiderSelection',
        loadChildren:()=>
        import('./components/sis-rider-selection/sis-rider-selection.module').then((m)=>m.SisRiderSelectionModule)
      }
    ]
  },
  {
    path:'sisRiderCalculation',
    component:SisRiderCalculationComponent,
    children:[
      {
        path:'sisRiderCalculation',
        loadChildren:()=>
        import('./components/sis-rider-calculation/sis-rider-calculation.module').then((m)=>m.SisRiderCalculationModule)

      }

    ]

  },
  {
    path:'sisSummary',
    component:SisSummaryComponent,
    children:[
      {
        path:'sisSummary',
        loadChildren:()=>
       import('./components/sis-summary/sis-summary.module').then((m)=>m.SisSummaryModule)
      }
    ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
