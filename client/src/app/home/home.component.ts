
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: any;

  constructor() {}
  registerToggle() {
    this.registerMode = true;
  }

  ngOnInit(): void {
    this.registerMode = !this.registerMode;

  }


  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}
