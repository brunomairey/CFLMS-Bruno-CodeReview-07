import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent implements OnInit {
heroBtnUrl: string;

  constructor() {
this.heroBtnUrl ="https://codefactory.wien";
   }

  ngOnInit() {
  	
  }

}
