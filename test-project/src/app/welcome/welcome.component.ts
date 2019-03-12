import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  display: number = 0;

  constructor() {
    setInterval(() => {
      this.display++;
    }, 2000);
  }

  ngOnInit() {
  }
}
