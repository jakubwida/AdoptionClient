import { Injectable } from '@angular/core';
import { Rest } from './Rest';
import { HttpClient } from '@angular/common/http';
import { Dog,Race,Adoption } from '../interfaces'


@Injectable()
export class GeneralService {
	rest:Rest;
	dogs:Array<Dog>=[];

	error:string;
  constructor(private http:HttpClient) {
		this.rest = new Rest(http);
		this.getDogs();
		}

	getDogs():void
		{
		var self = this;
		if(self.dogs.length==0){
			console.log("getting dogs");
			this.rest.getDogs().subscribe(
				data=>{self.dogs = data; self.error = null; console.log("getting dogs success",self.dogs)},
				err=>{self.error = err; console.log("getting dogs fail")}
				)
			}
		}



}
