export interface TableQuery {
  page: number;     // 0-based
  size: number;
  sortField?: string;
  sortOrder?: 1 | -1;
  search?: string;
}
