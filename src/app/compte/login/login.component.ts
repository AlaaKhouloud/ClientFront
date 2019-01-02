import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: any = {};
  public userForm: any = {};

  constructor(private userService: UserService , private router: Router) { }

  ngOnInit() {
  }

  loginUser(user: any , userForm: any){
      this.userService.loginUser(user).subscribe((response) => {
        if(response){
           if(response.user.role === 'ROLE_CLIENT'){
                this.router.navigate(['/home']);
                console.log("ok");
           }
        }
      },
      (error) => {console.log("not existing");}
    );
  }
}
