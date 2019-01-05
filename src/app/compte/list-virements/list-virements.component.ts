import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../../login-auth.service';


@Component({
  selector: 'app-list-virements',
  templateUrl: './list-virements.component.html',
  styleUrls: ['./list-virements.component.css']
})
export class ListVirementsComponent implements OnInit {

  constructor(private authService: LoginAuthService) {
      this.authService.isLoggedIn();
  }

  ngOnInit() {
  }

}
