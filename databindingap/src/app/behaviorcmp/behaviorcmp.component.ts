import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BehaviorService } from '../behavior.service';


@Component({
  selector: 'app-behaviorcmp',
  templateUrl: './behaviorcmp.component.html',
  styleUrls: ['./behaviorcmp.component.css']
})



export class BehaviorcmpComponent implements OnInit {

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


  constructor(private behservice: BehaviorService) {

  }

  subscribe1() {
    this.behservice.count$.subscribe(
      data => { this.observer1.push(data) },
      null,
      () => { this.showObserver1 = true; }
    )
  }
  susbcribe2() {
    this.behservice.count$.subscribe(
      data => { this.observer2.push(data) },
      null,
      () => { this.showObserver2 = true; }
    )
  }
  susbcribe3() {
    this.behservice.count$.subscribe(
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

