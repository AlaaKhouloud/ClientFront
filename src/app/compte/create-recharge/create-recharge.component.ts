import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../../login-auth.service';
import { UserService } from '../../user.service';
import { Recharge } from 'src/model/model.recharge';


@Component({
  selector: 'app-create-recharge',
  templateUrl: './create-recharge.component.html',
  styleUrls: ['./create-recharge.component.css']
})
export class CreateRechargeComponent implements OnInit {

  public logginuser: any = {};
  public recapitulatif: any = [];
  infos: any;
  public show: boolean = false;
  public temp: boolean = false;
  recharge:Recharge=new Recharge();
  ContactMethods=[{id:1,name:'email'},{id:2,name:'telephone'},{id:2,name:'sms'}];

  constructor(private authService: LoginAuthService , private userService: UserService) {
      this.authService.isLoggedIn();
      this.logginuser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.userService.getAllComptes(this.logginuser).subscribe(
      result => {
        console.log(result.body);
        this.infos = result.body;
      },
      error => {
          console.log(error);
      },
      () => {
          console.log("i was here");
      }
   );
  }

  addRecharge(){
   
    console.log(this.recharge);
  
    this.userService.putRecharge(this.logginuser ,this.recharge).subscribe(
      result => {
        console.log(result.body);
        this.recapitulatif = result.body;
        this.show = true;
      },
      error => {
          console.log(error);
          this.temp = true;
      },
      () => {
          console.log("i was here");
      }
   );
  }
}
