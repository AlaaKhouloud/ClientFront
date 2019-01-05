import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import {Router} from '@angular/router';
import { LoginAuthService } from '../../login-auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: any = {};
  public userForm: any = {};
  public show: boolean = false;

  constructor(private userService: UserService , private router: Router , private authService: LoginAuthService) {
      this.authService.isLoggedIn();
  }

  ngOnInit() {
  }

  loginUser(user: any , userForm: any){
      this.userService.loginUser(user).subscribe(
        result => {
          console.log(result.body);
           if(result.body != null){
            localStorage.setItem('currentUser' , JSON.stringify(result.body));
            //if(result.body.role == 'ROLE_CLIENT')
            this.router.navigate(['/home']);
            }
            else{
              this.show = true;
            }
        },
        error => {
            this.show = true;
            console.log(error);
        },
        () => {

            console.log("i was here");
        }
    );
  }
}
