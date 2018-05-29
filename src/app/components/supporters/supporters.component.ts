import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'SupportersComponent',
  templateUrl: './supporters.component.html',
  styleUrls: ['./supporters.component.css']
})
export class SupportersComponent implements OnInit {

	//NOT CONNECTED

	supporters:Array<string>=["Janusz","Andrzej","Elżbieta","Grzegorz","Aneta","Kanapka"]
  constructor() { }

  ngOnInit() {
  }

}
