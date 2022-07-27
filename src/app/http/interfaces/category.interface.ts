export interface CategoryInterface {
  categoryId?: number;
  id?: number;
  name: string;
  active: boolean;
}

export interface ICategoryUpdateResult {
  error?: string;
  success: boolean;
}
