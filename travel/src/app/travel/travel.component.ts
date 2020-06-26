import { Component, OnInit } from '@angular/core';
import { travelentry } from '../travelentry';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.sass']
})
export class TravelComponent implements OnInit {
	products = travelentry;
  constructor() { }

  ngOnInit(): void {
  }

}
