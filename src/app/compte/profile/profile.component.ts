import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../../login-auth.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public logginuser: any = {};
  public infos: any = [];

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

}
