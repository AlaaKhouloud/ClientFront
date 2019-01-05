import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../../login-auth.service';
import { UserService } from '../../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-virements',
  templateUrl: './list-virements.component.html',
  styleUrls: ['./list-virements.component.css']
})
export class ListVirementsComponent implements OnInit {

  public logginuser: any = {};
  public virements: any = [];
  constructor(private authService: LoginAuthService , private userService: UserService , private router: Router ) {
      this.authService.isLoggedIn();
      this.logginuser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.userService.getAllVirements(this.logginuser).subscribe(
      result => {
        console.log(result.body);
        this.virements = result.body;
      },
      error => {
          console.log(error);
      },
      () => {
          console.log("i was here");
      }
   );
  }

  AddVirement(){
    this.router.navigate(['/sendVirement']);
  }

}
