import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './compte/login/login.component';
import { CreateRechargeComponent } from './compte/create-recharge/create-recharge.component';
import { CreateVirementComponent } from './compte/create-virement/create-virement.component';
import { DetailsCompteComponent } from './compte/details-compte/details-compte.component';
import { ListRechargesComponent } from './compte/list-recharges/list-recharges.component';
import { ListVirementsComponent } from './compte/list-virements/list-virements.component';
import { ListComptesComponent } from './compte/list-comptes/list-comptes.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { LoginAuthService } from './login-auth.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { UserService } from './user.service';
import { ProfileComponent } from './compte/profile/profile.component';



const appRoutes : Routes = [
  {path:'errorPage' , component:ErrorPageComponent},
  {path:'compte' , component:DetailsCompteComponent , canActivate: [ AuthGuardService ]},
  {path:'virements' , component:ListVirementsComponent , canActivate: [ AuthGuardService ]},
  {path:'recharges' , component:ListRechargesComponent , canActivate: [ AuthGuardService ]},
  {path:'sendVirement' , component:CreateVirementComponent , canActivate: [ AuthGuardService ]},
  {path:'sendRecharge' , component:CreateRechargeComponent , canActivate: [ AuthGuardService ]},
  {path:'login' , component:LoginComponent},
  {path:'home' , component:ListComptesComponent , canActivate: [ AuthGuardService ]  }, 
  {path:'' , component:ListComptesComponent , canActivate: [ AuthGuardService ]  },
  {path:'**'  , pathMatch:'full' , redirectTo:'errorPage'},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateRechargeComponent,
    CreateVirementComponent,
    DetailsCompteComponent,
    ListRechargesComponent,
    ListVirementsComponent,
    ListComptesComponent,
    ErrorPageComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService , AuthGuardService , LoginAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
