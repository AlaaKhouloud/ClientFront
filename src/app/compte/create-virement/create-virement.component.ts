import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../../login-auth.service';


@Component({
  selector: 'app-create-virement',
  templateUrl: './create-virement.component.html',
  styleUrls: ['./create-virement.component.css']
})
export class CreateVirementComponent implements OnInit {

  constructor(private authService: LoginAuthService) {
      this.authService.isLoggedIn();
  }

  ngOnInit() {
  }

}
