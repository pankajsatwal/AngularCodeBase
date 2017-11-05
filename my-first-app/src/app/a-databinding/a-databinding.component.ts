import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-databinding',
  templateUrl: './a-databinding.component.html',
  styleUrls: ['./a-databinding.component.css']
})
export class ADatabindingComponent implements OnInit {
  isUserNameAvailable = false;
  username = '';
  constructor() { }

  ngOnInit() {
    if (this.username) {
      this.isUserNameAvailable = true;
    } else {
      this.isUserNameAvailable = false;
    }
    return this.isUserNameAvailable;
  }

  enableButton(event: any) {
    console.log(event);
    if ((<HTMLInputElement>event.target).value != '')
      this.isUserNameAvailable = true;
    else
      this.isUserNameAvailable = false;

  }
  resetUserName() {
    this.username = '';
    this.isUserNameAvailable = false;
  }
}
