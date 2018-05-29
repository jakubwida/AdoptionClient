import { Injectable } from '@angular/core';
import { User } from '../../interfaces'
import { HttpClient } from '@angular/common/http';

import {Rest} from '../Rest'

@Injectable()
export class AuthService {

	loggedUser:User=null;
	rest:Rest;
	error:string=null;
	info:string=null;

  constructor(http:HttpClient) {
		this.rest = new Rest(http);
		}

	login(email,password):void
		{
		var self = this;
		if(!self.loggedUser){
			console.log("LOGIN");
			this.rest.login(email,password).subscribe(
				data=>{self.loggedUser = data; self.error = null; console.log("login success")},
				err=>{self.error = err; console.log("login fail")}
				)
			}
		else{
			self.error = "User is already logged in."
			}
		}

	logout():void
		{
		var self = this;
		if(self.loggedUser){
			console.log("LOGOUT");
			this.rest.logout(self.loggedUser.id).subscribe(
				data=>{self.loggedUser = null; self.error = null; console.log("logout success")},
				err=>{self.error = err; console.log("logout fail")}
				)
			}
		else{
			self.error = "User is already logged out."
			}
		}

	register(email,password,firstname,lastname,address,provinceId):void
		{
		console.log("REGISTER");//unfinished
		var self = this;
			this.rest.register(email,password,firstname,lastname,address,provinceId).subscribe(
				data=>{self.loggedUser = null; self.error = null; self.info="Zarejestrowano poprawnie. Można przystąpić do logowania"; console.log("register success")},
				err=>{self.error = err; console.log("register fail")}
				)
		}


}
