import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-screen-loader',
  templateUrl: './full-screen-loader.component.html',
  styleUrls: ['./full-screen-loader.component.scss'],
})
export class FullScreenLoaderComponent implements OnInit {
  @Input() loading: boolean | null = false;

  constructor() {}
  ngOnInit(): void {}
}
