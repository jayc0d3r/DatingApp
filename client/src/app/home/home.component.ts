import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: any;

  constructor(private http: HttpClient) {}
  registerToggle() {
    this.registerMode = true;
  }

  ngOnInit(): void {
    this.registerMode = !this.registerMode;
    this.getUsers();
  }
  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: (response) => {
        this.users = response;
      },
      error: () => {
        console.log(console.error);
      },
      complete: () => {
        console.log('Request has been completed.');
      },
    });
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}
