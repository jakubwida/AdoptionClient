import { Component, OnInit,SimpleChanges,OnChanges  } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../../auth/services/auth.service';
import { GeneralService } from '../../services/general.service';
import { Dog,User,Race,Adoption } from '../../interfaces'
@Component({
  selector: 'app-dog-adopt',
  templateUrl: './dog-adopt.component.html',
  styleUrls: ['./dog-adopt.component.css']
})
export class DogAdoptComponent implements OnInit {

	id:string;
	dog:Dog;

	telephone:number;
	firstname:string;
	lastname:string;
	address:string;

	questionChildren:string;
	questionAnimals:string;
	questionExperience:string;

  constructor( private route: ActivatedRoute, private router: Router, private authService:AuthService, private generalService:GeneralService) { }

  ngOnInit() {
	let id = this.route.snapshot.paramMap.get('id');
	this.id = id;
  }

	ngAfterContentChecked(changes: SimpleChanges) {
			//console.log("changes",changes)
		let self = this;
		if(this.generalService.dogs && !this.dog){
			for(let dog of self.generalService.dogs){
				if(dog.id == parseInt(self.id)){
					console.log("doggo")
					self.dog=dog;
					}
				}
			//console.log(dogs)
			}
		}
	adoptButton():void{

		}
}
