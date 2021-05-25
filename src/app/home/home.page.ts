import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  elapsed: any = {
    h: '00',
    m: '00',
    s: '00'
  }
  progress:any = 0;
  overallProgress:any = 0;
  percent: number = 0;
  radius: number = 100;
  minutes: number = 1;
  seconds: any = 10;
  timer: any = false;
  overallTimer: any = false;
  fullTime: any = '00:01:30';


  countDownTimer: any = false;
  timeLeft: any = {
    m: '00',
    s: '00'
  };


}
