import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()
  menu = {
    fixed: true,
    animation: true,
    bgblack: false,
  };
  mobileActive = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMobile() {
    this.mobileActive = !this.mobileActive;
  }
}
