import { HttpClient } from '@angular/common/http';
import { Dog,Race,User,Adoption } from '../interfaces'
import {Observable} from 'rxjs';

export class Rest{

	loremIpsum:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."

	doggos:Array<Dog>=[];

	races:Array<Race>=[
		{raceId:0,name:"Mieszaniec",description:this.loremIpsum},
		{raceId:1,name:"Szpic",description:this.loremIpsum},
		{raceId:2,name:"Owczarek Niemiecki",description:this.loremIpsum},
		{raceId:3,name:"Mops",description:this.loremIpsum},
		{raceId:4,name:"Terrier",description:this.loremIpsum},
		{raceId:5,name:"Husky",description:this.loremIpsum},
		];

	constructor(http:HttpClient){
		for(let i=0; i<30; i++)
			{
			let newdoggo = {
				id:i,

				dogName:["Reks","Azor","Budziek","Czarek","Kanapka","Buba","Klops"][Math.floor(Math.random()*7)],
				dogAge:Math.floor(Math.random()*10+1),
				dateAdded:"01:12:2014",
				sex:["male","female"][Math.floor(Math.random()*2)],
				vetInfo:[null,this.loremIpsum][Math.floor(Math.random()*2)],
				raceId:Math.floor(Math.random()*6),
				height:Math.floor(Math.random()*100),
				description:this.loremIpsum,

				photos:["dogGrass.jpg"],
				race:this.races[Math.floor(Math.random()*this.races.length)],
				}
			this.doggos.push(newdoggo);
			}
		}

	getDogs():Observable<Array<Dog>>{
		var self = this;
		return new Observable(observer=>{
			setTimeout(()=>{observer.next(self.doggos);observer.complete()},1000)
			})
		}
	getRaces():Observable<Array<Race>>{
		var self = this;
		return new Observable(observer=>{
			setTimeout(()=>{observer.next(self.races);observer.complete()},1000)
			})
		}
	addDog():Observable<String>{return null}
	removeDog():Observable<String>{return null}
	addAdoption():Observable<String>{return null}
	getAdoptions():Observable<String>{return null}
	removeAdoption():Observable<String>{return null}
	realiseAdoption():Observable<String>{return null}
	getSupporters():Observable<User>{return null}
}
