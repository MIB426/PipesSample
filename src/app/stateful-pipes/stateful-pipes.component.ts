import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-stateful-pipes',
  templateUrl: './stateful-pipes.component.html',
  styleUrls: ['./stateful-pipes.component.css']
})
export class StatefulPipesComponent implements OnInit {
  pageViews = 100;
  constructor() {
    // simulate polling every 5 seconds
    setInterval(() => {
      this.pageViews += Math.round(Math.random() * 10);
    }, 3000);
  }

  ngOnInit() {
  }

}
