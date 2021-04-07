import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subjectcomp',
  templateUrl: './subjectcomp.component.html',
  styleUrls: ['./subjectcomp.component.css']
})
export class SubjectcompComponent implements OnInit {

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


  constructor(private subservice: SubjectService) {

  }

  subscribe1() {
    this.subservice.count$.subscribe(
      data => { this.observer1.push(data) },
      null,
      () => { this.showObserver1 = true; }
    )
  }
  susbcribe2() {
    this.subservice.count$.subscribe(
      data => { this.observer2.push(data) },
      null,
      () => { this.showObserver2 = true; }
    )
  }
  susbcribe3() {
    this.subservice.count$.subscribe(
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
