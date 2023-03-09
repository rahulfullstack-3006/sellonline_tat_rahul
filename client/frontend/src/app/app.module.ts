import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { MainService } from './services/main.service';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeadcreationComponent } from './components/leadcreation/leadcreation.component';
import { LoginComponent } from './components/login/login.component';
import { RegsiterComponent } from './components/regsiter/regsiter.component';
import { LeaddashboardComponent } from './components/leaddashboard/leaddashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { ProductdashboardComponent } from './components/productdashboard/productdashboard.component';
import { EditleadComponent } from './components/editlead/editlead.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SispersonalComponent } from './components/sispersonal/sispersonal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SisCalculationComponent } from './components/sis-calculation/sis-calculation.component';
import { SisRiderSelectionComponent } from './components/sis-rider-selection/sis-rider-selection.component';
import { SisSummaryComponent } from './components/sis-summary/sis-summary.component';
import { SisRiderCalculationComponent } from './components/sis-rider-calculation/sis-rider-calculation.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    RegsiterComponent,
    LeadcreationComponent,
    LoginComponent,
    LeaddashboardComponent,
    ProductdashboardComponent,
    EditleadComponent,
    SispersonalComponent,
    SisCalculationComponent,
    SisRiderSelectionComponent,
    SisSummaryComponent,
    SisRiderCalculationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [{provide:LocationStrategy,useClass:PathLocationStrategy},
    MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
