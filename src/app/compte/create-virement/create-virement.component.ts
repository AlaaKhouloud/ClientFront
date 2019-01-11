import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../../login-auth.service';
import { UserService } from '../../user.service';
import { Virement } from 'src/model/model.virement';


@Component({
  selector: 'app-create-virement',
  templateUrl: './create-virement.component.html',
  styleUrls: ['./create-virement.component.css']
})
export class CreateVirementComponent implements OnInit {

  public logginuser: any = {};
  public recapitulatif: any = [];
  infos: any;
  public show: boolean = false;
  public temp: boolean = false;
  public echec: boolean = false;
  virement:Virement=new Virement();
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

  addVirement(){
    console.log("????????????????????????????????????");
   
    console.log( this.virement);
    console.log("????????????????????????????????????");
    this.userService.putVirement(this.logginuser , this.virement).subscribe(
      result => {
        console.log(result.body);
        this.recapitulatif = result.body;
      
        this.show = false;
        this.echec=false;
        if(result.body != null){
          this.show = true;
          }
          else{
            this.echec=true;
          }
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
