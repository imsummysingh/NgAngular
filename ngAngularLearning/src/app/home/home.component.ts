import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    /* this.firstObsSubscription = interval(1000).subscribe((count:number)=>{
      console.log(count);
    }); */

    //custom observable

    const customIntervalObservable = Observable.create(observer=>{
      let count=0;
      setInterval(()=>{
        observer.next(count);

        if(count===5){
          observer.complete();
        }

        if(count>3){
          observer.error(new Error('count exceed 3'));
        }

        count++;
      },1000);
    });



    this.firstObsSubscription = customIntervalObservable.pipe(filter(data=>{
      return data>0;
    }),map((data:number)=>{
      return 'Round: '+(data+1);
    })).subscribe(data=>{
      console.log(data);
    }, error=>{
      alert(error.message);
    }, ()=>{
      console.log('completed');
    });

    //without operator

    /* this.firstObsSubscription = customIntervalObservable.subscribe(data=>{
      console.log(data);
    }, error=>{
      alert(error.message);
    }, ()=>{
      console.log('completed');
    }); */

  }

  ngOnDestroy(): void {
      this.firstObsSubscription.unsubscribe();
  }

}
