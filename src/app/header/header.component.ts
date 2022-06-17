import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  isAuth = false;
  page = '';
  routerLink = [RouterLink];

  constructor() { }

  ngOnInit(): void {
    // (typeof RouterLink)[this.page];
    // this.page = this.routerLink[this.routerLink.length - 1];
  }

  logIn(): void {
    this.isAuth = true;
  }

  logOff(): void {
    this.isAuth = false;
  }
}
