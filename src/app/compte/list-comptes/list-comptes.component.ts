import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../../login-auth.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-list-comptes',
  templateUrl: './list-comptes.component.html',
  styleUrls: ['./list-comptes.component.css']
})
export class ListComptesComponent implements OnInit {

  public logginuser: any = {};
  public comptes: any = [];
  constructor(private authService: LoginAuthService , private userService: UserService) {
      this.authService.isLoggedIn();
      this.logginuser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.userService.getAllComptes(this.logginuser).subscribe(
      result => {
        console.log(result.body);
        this.comptes = result.body;
        console.log("44444444444444444444444444444444444444");
        console.log(this.comptes);
        console.log("44444444444444444444444444444444444444");

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
