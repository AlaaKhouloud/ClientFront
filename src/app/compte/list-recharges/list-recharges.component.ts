import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../../login-auth.service';


@Component({
  selector: 'app-list-recharges',
  templateUrl: './list-recharges.component.html',
  styleUrls: ['./list-recharges.component.css']
})
export class ListRechargesComponent implements OnInit {

  constructor(private authService: LoginAuthService) {
      this.authService.isLoggedIn();
  }

  ngOnInit() {
  }

}
