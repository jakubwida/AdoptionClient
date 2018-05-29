import { Component, OnInit,SimpleChanges,OnChanges } from '@angular/core';
import {GeneralService} from '../../services/general.service'

import { Dog } from '../../interfaces'

@Component({
  selector: 'StartComponent',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

	currentdDogs:Array<Dog>;
	indexBuffer:number=0;
	maxIndexbuffer:number=2;
  constructor(private generalService:GeneralService) { }

  ngOnInit() {
		if(this.generalService.dogs)
			{
			this.currentdDogs=this.generalService.dogs.slice(1,3);
			}
  }

	ngOnChanges(changes: SimpleChanges) {

		if(this.generalService.dogs)
			{
			this.currentdDogs=this.generalService.dogs.slice(1,3);
			//console.log(dogs)
			}
		}

	updateDogs()
		{
		var self = this;
		this.currentdDogs=this.generalService.dogs.slice(self.indexBuffer*3,self.indexBuffer*4);
		}

	nextDogs()
		{
		if(this.indexBuffer < this.maxIndexbuffer)
			{
			this.indexBuffer+=1;
			}
		this.updateDogs()
		}

	prevDogs()
		{
		if(this.indexBuffer > 0)
			{
			this.indexBuffer-=1;
			}
		this.updateDogs()
		}

}
