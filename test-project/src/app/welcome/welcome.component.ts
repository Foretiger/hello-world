import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  display: number = 0;
  random: number;

  constructor() {
    this.newRandom();

    setInterval(() => {
      this.display+=2;
    }, 500);

    setInterval(this.newRandom, 1000);
  }

  ngOnInit() {
  }

  newRandom = () => {
    this.random = _.random(1,100);
  }
}
