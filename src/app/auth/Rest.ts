import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces'
import {Observable} from 'rxjs';

export class Rest {


	paniZosia:User = {id:5,firstname:"Zosia",lastname:"Kowalska",password:"Zosia1234",email:"zosia@mail.com",address:"Grzbietów ul. Poznańska 5",provinceId:3,province:"MAŁOPOLSKIE"}
	andrzejBiznes:User = {id:12,firstname:"Andrzej",lastname:"Kaban",password:"Andrzej1234",email:"andrzej@mail.com",address:"Elżbietów ul. Krakowska 32",provinceId:3,province:"MAŁOPOLSKIE"}
	paniAneta:User = {id:7,firstname:"Aneta",lastname:"Nowak",password:"Aneta1234",email:"aneta@mail.com",address:"Mościce ul. Betonowa 16",provinceId:4,province:"ŚLĄSKIE"}
	users:User[]=[this.paniAneta,this.paniZosia,this.andrzejBiznes];

	provinces:string[]=["MAŁOPOLSKIE","ŚLĄSKIE","WIELKOPOLSKIE"]

	constructor(http:HttpClient){}

	login(email,password):Observable<User>
		{
		let logod = null;
		for(let u of this.users){
			if(u.email == email && u.password == password){
				logod = u;
				return new Observable(observer=>{
					setTimeout(()=>{observer.next(logod);observer.complete()},1000)
					})
				}
			}
			return new Observable(observer=>{
				setTimeout(()=>{observer.error("Błędny adres lub hasło");observer.complete()},1000)
				})
		}

	logout(id):Observable<String>
		{
		return new Observable(observer=>{
			setTimeout(()=>{observer.next("logout");observer.complete()},1000)
			})
		}

	register(email,password,firstname,lastname,address,provinceId):Observable<String>
		{
		for(let u of this.users){
			if(u.email == email ){
				return new Observable(observer=>{
					setTimeout(()=>{observer.error("E-Mail jest już w użyciu");observer.complete()},1000)
					})
				}
			}
		let id = Math.floor(Math.random()*1000)
		let newuser = {id:id,email:email,firstname:firstname,password:password,lastname:lastname,address:address,provinceId:provinceId,province:this.provinces[provinceId]}
		return new Observable(observer=>{
			setTimeout(()=>{this.users.push(newuser);observer.next("success");observer.complete()},1000)
			})
		}


	}
