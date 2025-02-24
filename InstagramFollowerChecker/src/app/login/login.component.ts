import { Component } from '@angular/core';

declare var FB: any;
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  constructor() { }

  loginWithFacebook() {
    FB.login((response: any) => {
      if (response.authResponse) {
        console.log("User logged in!", response);
        this.getUserData();
      } else {
        console.log("User cancelled login or did not fully authorize.");
      }
    }, { scope: 'email,public_profile' });
  }

  getUserData() {
    FB.api('/me', { fields: 'id,name,email,picture' }, (response: any) => {
      console.log("User Info:", response);
    });
  }
}

