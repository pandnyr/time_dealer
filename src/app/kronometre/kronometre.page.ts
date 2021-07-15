import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-kronometre',
  templateUrl: './kronometre.page.html',
  styleUrls: ['./kronometre.page.scss'],
})
export class KronometrePage implements OnInit {
  [x: string]: any;

  constructor() { }
  ngOnInit() {
    
  }

  percent: number = 0;
  radius:number = 100;
  fullTime: any = '00:00:00';

  timer: any = false;
  progress: any = 0;
  minutes: number = 0;
  seconds: any = 0;

  elapsed: any = {
    h: '00',
    m: '00',
    s: '00'
  }
  overallTimer: any = false;

  
  
  


  startTimer() {

    if(this.timer) {
      clearInterval(this.timer);
    }
    if(!this.overallTimer) {
      this.progressTimer();
      this.insomia.keepAwake();
    }

    this.timer = 0;
    this.percent = 0;
    this.progress = 0;

    let timeSplit = this.fullTime.split(':');
    this.minutes = timeSplit[1];
    this.seconds = timeSplit[1];

    let totalSeconds = Math.floor(this.minutes * 60) + parseInt(this.seconds);
    
    this.timer = setInterval(() => {

      if(this.percent == this.radius)
        clearInterval(this.timer);

      this.percent = Math.floor((this.progress / totalSeconds) * 100);
      this.progress++;
    }, 1000)
  }



  progressTimer() {
    let countDownDate = new Date();

    this.overallTimer = setInterval(() => {
      let now = new Date().getTime();
      let distance = now - countDownDate.getTime();

      this.elapsed.s = 0
      this.elapsed.m = 0
      this.elapsed.h = 0

      this.elapsed.h = this.pad(this.elapsed.h, 2);
      this.elapsed.m = this.pad(this.elapsed.m, 2);
      this.elapsed.s = this.pad(this.elapsed.s, 2);

      
      if(this.elapsed.s == 60){
        this.elapsed.m++;
        this.elapsed.s - 60;
      }
      else {
        this.elapsed.s++;
      }

      if(this.elapsed.m == 60){
        this.elapsed.h++;
      }

      if(this.elapsed.h == 60){
        clearInterval(this.timer);
      }
     
      
    }, 1000)
  }

  pad(num, size) {
    let s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }
}
