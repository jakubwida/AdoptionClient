import { Component, Input, OnInit } from '@angular/core';
import { Dog } from '../../interfaces'
@Component({
  selector: 'DogThumbnailComponent',
  templateUrl: './dog-thumbnail.component.html',
  styleUrls: ['./dog-thumbnail.component.css']
})
export class DogThumbnailComponent implements OnInit {
	@Input()dog:Dog;
  constructor() { }
  ngOnInit() {
  }

}
