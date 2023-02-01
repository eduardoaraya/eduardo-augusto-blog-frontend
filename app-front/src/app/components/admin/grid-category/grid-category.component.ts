import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryInterface } from 'src/app/http/interfaces/category.interface';
import { GridModel, GridRowInterface } from 'src/app/shared/grid/grid-model';

@Component({
  selector: 'app-grid-category',
  templateUrl: './grid-category.component.html',
  styleUrls: ['./grid-category.component.scss'],
})
export class GridCategoryComponent implements OnInit {
  @Input()
  set categories(value: CategoryInterface[]) {
    this.categoryGrid.setData(value);
  }

  @Output()
  selectData = new EventEmitter<CategoryInterface>();
  @Output()
  deleteCategory = new EventEmitter<number | undefined>();

  categoryGrid = new GridModel<CategoryInterface>({
    columns: [
      {
        id: 'name',
        title: 'Nome',
      },
      {
        id: 'active',
        title: 'Status',
        render: (d) => (d ? 'Ativo' : 'Inativo'),
      },
    ],
    actions: [
      {
        title: 'Editar',
        click: (_e, data) => this.selectData.emit(data),
        color: 'primary',
      },
      {
        click: (_e, data) => this.deleteCategory.emit(data.id),
        color: 'red',
        title: 'Excluir',
      },
    ],
  });

  ngOnInit(): void {}
}
