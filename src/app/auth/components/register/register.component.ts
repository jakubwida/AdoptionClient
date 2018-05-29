import { Component, OnInit } from '@angular/core';

import {AuthService} from '../../services/auth.service'

@Component({
  selector: 'register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	email:string;
	firstname:string;
	lastname:string;
	address:string;
	password:string;
	provinceId:number;
	passwordRepeat:string;

	passPattern:string="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,12}$"

	provinces: string[] = ["MAŁOPOLSKIE","ŚLĄSKIE","WIELKOPOLSKIE"]

  constructor(private authService:AuthService) { }

  ngOnInit() {
	this.authService.info = null;
	this.email = null;
	this.firstname = null;
	this.lastname = null;
	this.address = null;
	this.password = null;
	this.provinceId = null;
  }

	registerButton():void{
		var self =this;
		this.authService.register(self.email,self.password,self.firstname,self.lastname,self.address,self.provinceId)
		}

}
