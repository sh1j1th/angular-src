import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { LearnerDashboardComponent } from './components/learner-dashboard/learner-dashboard.component';
import { TrainerDashboardComponent } from './components/trainer-dashboard/trainer-dashboard.component';
import { LearnerRegisterComponent } from './components/learner-register/learner-register.component';
import { TrainerRegisterComponent } from './components/trainer-register/trainer-register.component';
import { HomeComponent } from './components/home/home.component';
import { RegPopupComponent } from './components/reg-popup/reg-popup.component';

import { ValidateService } from './services/validate.service';
import { NgFlashMessagesModule } from 'ng-flash-messages';

const  appRoutes: Routes = [
  { path:'', component: HomeComponent},
  { path:'learner-register', component: LearnerRegisterComponent},
  { path:'trainer-register', component: TrainerRegisterComponent},
  { path:'login', component: LoginComponent},
  { path:'learner-dashboard', component: LearnerDashboardComponent},
  { path:'trainer-dashboard', component: TrainerDashboardComponent},
  { path:'reg-popup', component: RegPopupComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    LearnerDashboardComponent,
    TrainerDashboardComponent,
    LearnerRegisterComponent,
    TrainerRegisterComponent,
    HomeComponent,
    RegPopupComponent
  ],
  imports: [
    BrowserModule,
    NgFlashMessagesModule, 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
