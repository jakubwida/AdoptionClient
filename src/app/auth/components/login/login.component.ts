import { Component, OnInit } from '@angular/core';

import {AuthService} from '../../services/auth.service'

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	email:String;
	password:String;

  constructor(private authService:AuthService) { }

  ngOnInit() {}

	loginButton():void
		{
		var self = this;
		this.authService.login(self.email,self.password)
		}

	logoutButton():void
		{
		var self = this;
		this.authService.logout()
		}

}
