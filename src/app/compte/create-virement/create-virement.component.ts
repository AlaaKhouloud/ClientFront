import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../../login-auth.service';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-create-virement',
  templateUrl: './create-virement.component.html',
  styleUrls: ['./create-virement.component.css']
})
export class CreateVirementComponent implements OnInit {

  public logginuser: any = {};
  public recapitulatif: any = [];

  constructor(private authService: LoginAuthService , private userService: UserService) {
      this.authService.isLoggedIn();
      this.logginuser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.userService.getmycpt(this.logginuser).subscribe(
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

  addVirement(virement: any){
    this.userService.putVirement(this.logginuser , virement).subscribe(
      result => {
        console.log(result.body);
        this.recapitulatif = result.body;
      },
      error => {
          console.log(error);
      },
      () => {
          console.log("i was here");
      }
   );
  }

}
