import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../../login-auth.service';


@Component({
  selector: 'app-create-recharge',
  templateUrl: './create-recharge.component.html',
  styleUrls: ['./create-recharge.component.css']
})
export class CreateRechargeComponent implements OnInit {

  constructor(private authService: LoginAuthService) {
      this.authService.isLoggedIn();
  }

  ngOnInit() {
  }

}
