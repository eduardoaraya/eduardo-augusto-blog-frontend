export interface GridColumnInterface<T> {
  id: string & keyof T;
  title: string;
  render?: (d: T[keyof T]) => string;
}

export type GridRowInterface<T> = {
  [x in keyof T]: T[keyof T];
};

export interface GridConfigModelInterface<T> {
  columns: GridColumnInterface<T>[];
  data?: T[];
  actions?: GridActionInterface<T>[];
}

export interface GridActionInterface<T> {
  click: (_event: MouseEvent, row: T) => void;
  title: string;
  color: string;
}

export class GridModel<T> {
  constructor(private config: GridConfigModelInterface<T>) {}

  getColumns(): GridColumnInterface<T>[] {
    return this.config.columns;
  }

  getRows() {
    return this.config.data ?? [];
  }

  setData(data: T[]) {
    this.config.data = data;
  }

  hasActions(): boolean {
    return !!this.config.actions?.length;
  }

  getActions(): GridActionInterface<T>[] {
    return this.config.actions ?? [];
  }
}
