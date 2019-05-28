import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-async-pipes',
  templateUrl: './async-pipes.component.html',
  styleUrls: ['./async-pipes.component.css']
})
export class AsyncPipesComponent implements OnInit {
// Async Pipe
fetchPrice = new Promise((resolve, reject) => {
  setTimeout(() => resolve(10), 5000);
});
numbers = interval(1000);
seconds = this.numbers;
  constructor() { }

  ngOnInit() {
  }

}
