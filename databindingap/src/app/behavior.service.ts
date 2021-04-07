// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class BehaviorService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { BehaviorSubject,  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {

  counter = 0;
  count$: Observable<any>;
  //count: Subject<number>;
  //count: ReplaySubject<number>;
  count: BehaviorSubject<number>;
  //private count: Subject<number>;

  constructor() {
    this.count = new BehaviorSubject(100);
    //this.count = new AsyncSubject();
    // this.count = new ReplaySubject();
    //this.count = new Subject();
    this.count$ = this.count.asObservable();

    setInterval(() => {
      this.counter = this.counter + 1;
      if (this.counter > 10) {
        this.count.complete();
      }
      this.count.next(this.counter);
    }, 1000)

  }
}