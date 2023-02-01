import { Component, OnInit } from '@angular/core';
import services from './services';
@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
})
export class ServicesSectionComponent implements OnInit {
  serviceList = services;

  constructor() {}
  ngOnInit(): void {}

  active(service: any, item: any) {
    service.active = item.title;
  }
}
