import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent implements OnInit,DoCheck {
	length;

  constructor(private cs : CartService) {  }
  ngDoCheck(){
  	this.length = this.cs.getLength();
  }
  ngOnInit() {
  	
  }

}
