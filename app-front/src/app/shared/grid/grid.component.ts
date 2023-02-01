import { Component, Input, OnInit } from '@angular/core';
import { GridColumnInterface, GridModel, GridRowInterface } from './grid-model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent<T> implements OnInit {
  @Input()
  gridModel: GridModel<T> = new GridModel<T>({
    columns: [],
    data: [],
  });

  constructor() {}

  ngOnInit(): void {}

  getRow(row: GridRowInterface<T>, col: GridColumnInterface<T>) {
    const data = row[col.id];

    if (data === undefined) return '';

    if (col.render) {
      return col.render(data);
    }

    return data;
  }

  getColor(color: string): string[] {
    return [`text-${color}`, `dark:text-${color}`];
  }
}
