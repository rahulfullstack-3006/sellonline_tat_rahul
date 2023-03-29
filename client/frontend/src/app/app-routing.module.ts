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
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  // {
  //   path:'register',
  //   component:RegsiterComponent,
  //   children:[
  //     {
  //       path:'register',
  //       loadChildren:()=>
  //       import('./components/regsiter/register.module').then((m)=>m.RegisterModule)
  //     }
  //   ]
  // },
  {
    path:'register',
    loadChildren:()=>import('./components/regsiter/register.module').then(x=>x.RegisterModule)
  },
  // {
  //   path:'login',
  //   component:LoginComponent,
  //   children:[
  //     {
  //       path:'login',
  //       loadChildren:()=>
  //         import('./components/login/login.module').then((m)=>m.LoginModule)
  //     },  
  //   ]  
  // },
  {
    path:'login',
    loadChildren:()=>import('./components/login/login.module').then(x=>x.LoginModule)
  },

  // {
  //   path:'leadCreation',
  //   component:LeadcreationComponent,
  //   canActivate:[AuthguardService],
  //   children:[
  //     {
  //       path:'leadCreation',
  //       loadChildren:()=>
  //         import('./components/leadcreation/leadcreation.module').then((m)=>m.LeadcreationModule)
  //     },  
  //   ]  
  // },

  {
  path:'leadCreation',
  loadChildren:()=>import('./components/leadcreation/leadcreation.module').then(x=>x.LeadcreationModule)
  },

  // {
  //   path:'updateLead/:id',
  //   component:EditleadComponent,
  //   children:[
  //     {
  //       path:'updateLead/:id',
  //       loadChildren:()=>
  //         import('./components/editlead/editlead.module').then((m)=>m.EditleadModule)
  //     },  
  //   ]  
  // },
  {
   path:'updateLead/:id',
   loadChildren:()=>import('./components/editlead/editlead.module').then(x=>x.EditleadModule)
  },
  // {
  //   path:'leadDashboard',
  //   component:LeaddashboardComponent,
  //   children:[
  //     {
  //       path:'leadDashboard',
  //       // canActivate:[AuthguardService],
  //       loadChildren:()=>
  //       import('./components/leaddashboard/leaddashboard.module').then((m)=>m.LeaddashboardModule)
  //     }
  //   ]
  // },
  { 
    path: 'leadDashboard',
    loadChildren: () => import('./components/leaddashboard/leaddashboard.module').then(x => x.LeaddashboardModule)
 },

  // {
  //   path:'productDashboard',
  //   component:ProductdashboardComponent,
  //   children:[
  //     {
  //       path:'productDashboard',
  //       loadChildren:()=>
  //       import('./components/productdashboard/productdashboard.module').then((m)=>m.ProductdashboardModule)
  //     }
  //   ]
  // },
  {
   path:'productDashboard',
   loadChildren:()=>import('./components/productdashboard/productdashboard.module').then(x=>x.ProductdashboardModule)
  },

  // {
  //   path:'sisPersonal',
  //   component:SispersonalComponent,
  //   children:[
  //     {
  //       path:'sisPersonal',
  //       loadChildren:()=>
  //       import('./components/sispersonal/sispersonal.module').then((m)=>m.SispersonalModule)
  //     }
  //   ]
  // },

  {
   path:'sisPersonal',
   loadChildren:()=>import('./components/sispersonal/sispersonal.module').then(x=>x.SispersonalModule)
  },
  // {
  //   path:'sisCalculation',
  //   component:SisCalculationComponent,
  //   children:[
  //     {
  //       path:'sisCalculation',
  //       loadChildren:()=>
  //       import('./components/sis-calculation/sis-calculation.module').then((m)=>m.SisCalculationModule)
  //     }
  //   ]
  // },
  {
  path:'sisCalculation',
  loadChildren:()=>import('./components/sis-calculation/sis-calculation.module').then(m=>m.SisCalculationModule)
  },
  // {
  //   path:'sisRiderSelection',
  //   component:SisRiderSelectionComponent,
  //   children:[
  //     {
  //       path:'sisRiderSelection',
  //       loadChildren:()=>
  //       import('./components/sis-rider-selection/sis-rider-selection.module').then((m)=>m.SisRiderSelectionModule)
  //     }
  //   ]
  // },
  {
    path:'sisRiderSelection',
    loadChildren:()=>import('./components/sis-rider-selection/sis-rider-selection.module').then(m=>m.SisRiderSelectionModule)
  },
  // {
  //   path:'sisRiderCalculation',
  //   component:SisRiderCalculationComponent,
  //   children:[
  //     {
  //       path:'sisRiderCalculation',
  //       loadChildren:()=>
  //       import('./components/sis-rider-calculation/sis-rider-calculation.module').then((m)=>m.SisRiderCalculationModule)

  //     }

  //   ]

  // },

  {
    path:'sisRiderCalculation',
    loadChildren:()=>import('./components/sis-rider-calculation/sis-rider-calculation.module').then(x=>x.SisRiderCalculationModule)
  },
  // {
  //   path:'sisSummary',
  //   component:SisSummaryComponent,
  //   children:[
  //     {
  //       path:'sisSummary',
  //       loadChildren:()=>
  //      import('./components/sis-summary/sis-summary.module').then((m)=>m.SisSummaryModule)
  //     }
  //   ]
  // },
  {
    path:'sisSummary',
    loadChildren:()=>import('./components/sis-summary/sis-summary.module').then(x=>x.SisSummaryModule)
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
