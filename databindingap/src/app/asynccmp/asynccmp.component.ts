import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AsyncService } from '../async.service';

@Component({
  selector: 'app-asynccmp',
  templateUrl: './asynccmp.component.html',
  styleUrls: ['./asynccmp.component.css']
})

export class AsynccmpComponent implements OnInit {

  title = 'RxJS Subjects Demo';
  observer1$: Subscription;
  observer2$: Subscription;
  observer3$: Subscription;
  observer1 = [];
  observer2 = [];
  observer3 = [];
  showObserver1 = false;
  showObserver2 = false;
  showObserver3 = false;


  constructor(private asyservice: AsyncService) {

  }

  subscribe1() {
    this.asyservice.count$.subscribe(
      data => { this.observer1.push(data) },
      null,
      () => { this.showObserver1 = true; }
    )
  }
  susbcribe2() {
    this.asyservice.count$.subscribe(
      data => { this.observer2.push(data) },
      null,
      () => { this.showObserver2 = true; }
    )
  }
  susbcribe3() {
    this.asyservice.count$.subscribe(
      data => { this.observer3.push(data) },
      null,
      () => { this.showObserver3 = true; }
    )
  }

  ngOnInit() {

  }
  ngOnDestroy() {

  }

}


