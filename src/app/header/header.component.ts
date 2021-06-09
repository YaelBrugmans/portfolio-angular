import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth = false;
  page = '';
  // routerLink= [RouterLink];

  constructor() { }

  ngOnInit(): void {
    // (typeof RouterLink)[this.page];
    // this.page = this.routerLink;
  }

  logIn(): void {
    this.isAuth = true;
  }

  logOff(): void {
    this.isAuth = false;
  }
}
