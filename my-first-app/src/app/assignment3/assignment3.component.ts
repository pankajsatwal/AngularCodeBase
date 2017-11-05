import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styles:[`.colorWhite{
  color:white;
  }
  `]
  // styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  isVisible = false;
  buttonClickCount: number[] = [0];
  timeToDisplayList=[];
  click = 0;
  arrayString = '';

  constructor() { }

  ngOnInit() {
  }

  getBGColor(index:number) {
    console.log("this.index:["+index+"]");
    return this.click > 4 ? 'blue' : 'none';
  }

  changeParaVisibility(event: any) {
    this.click = this.click + 1;
    this.buttonClickCount.push(this.click);
    this.timeToDisplayList.push(new Date());

    this.arrayString = "[" + this.buttonClickCount + "]";

    console.log(this.arrayString);

    if (!this.isVisible)
      this.isVisible = true;
    else
      this.isVisible = false;

    console.log("isVisible:" + this.isVisible)
  }
}
