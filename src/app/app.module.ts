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
import { AuthGuardService } from './guards/auth-guard.service';

import { UserService } from './user.service';


const appRoutes : Routes = [
  {path:'**' , redirectTo:'login' , pathMatch:'full'},
  {path:'compte' , component:DetailsCompteComponent},
  {path:'virements' , component:ListVirementsComponent},
  {path:'recharges' , component:ListRechargesComponent},
  {path:'sendVirement' , component:CreateVirementComponent},
  {path:'sendRecharge' , component:CreateRechargeComponent},
  {path:'login' , component:LoginComponent},
  {path:'home' , component:ListComptesComponent , canActivate: [ AuthGuardService ]  },
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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService , AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
