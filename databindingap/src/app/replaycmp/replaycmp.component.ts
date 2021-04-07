import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReplayService } from '../replay.service';


@Component({
  selector: 'app-replaycmp',
  templateUrl: './replaycmp.component.html',
  styleUrls: ['./replaycmp.component.css']
})



export class ReplaycmpComponent implements OnInit {

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


  constructor(private repservice: ReplayService) {

  }

  subscribe1() {
    this.repservice.count$.subscribe(
      data => { this.observer1.push(data) },
      null,
      () => { this.showObserver1 = true; }
    )
  }
  susbcribe2() {
    this.repservice.count$.subscribe(
      data => { this.observer2.push(data) },
      null,
      () => { this.showObserver2 = true; }
    )
  }
  susbcribe3() {
    this.repservice.count$.subscribe(
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
