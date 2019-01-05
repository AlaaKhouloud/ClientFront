import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../../login-auth.service';
import { UserService } from '../../user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-list-recharges',
  templateUrl: './list-recharges.component.html',
  styleUrls: ['./list-recharges.component.css']
})
export class ListRechargesComponent implements OnInit {

  public logginuser: any = {};
  public recharges: any = [];
  constructor(private authService: LoginAuthService , private userService: UserService , private router: Router ) {
      this.authService.isLoggedIn();
      this.logginuser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.userService.getAllRecharges(this.logginuser).subscribe(
      result => {
        console.log(result.body);
        this.recharges = result.body;
      },
      error => {
          console.log(error);
      },
      () => {
          console.log("i was here");
      }
   );
  }


    AddRecharge(){
      this.router.navigate(['/sendRecharge']);
    }

}
