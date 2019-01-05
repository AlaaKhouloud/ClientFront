import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../../login-auth.service';


@Component({
  selector: 'app-details-compte',
  templateUrl: './details-compte.component.html',
  styleUrls: ['./details-compte.component.css']
})
export class DetailsCompteComponent implements OnInit {

  constructor(private authService: LoginAuthService) {
      this.authService.isLoggedIn();
  }

  ngOnInit() {
  }

}
