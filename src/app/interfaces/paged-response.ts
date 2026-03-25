export interface PagedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages?: number;
  number?: number; // pagina corrente
  size?: number;
}
