import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {DipartimentoTable} from '../models/dipartimento';
import {HttpClient, HttpParams} from '@angular/common/http';
import {API_BASE_URL, API_ENDPOINTS} from '../config/api.config';
import {TableQuery} from '../interfaces/table-query';
import {PagedResponse} from '../interfaces/paged-response';

@Injectable({providedIn: 'root'})
export class DipartimentiService {
  constructor(private readonly http: HttpClient) {
  };

  getPage(query: TableQuery): Observable<PagedResponse<DipartimentoTable>> {
    let params = new HttpParams()
      .set('page', query.page)
      .set('size', query.size);

    if (query.sortField) {
      const dir = query.sortOrder === -1 ? 'desc' : 'asc';
      params = params.set('sort', `${query.sortField},${dir}`);
    }

    if (query.search?.trim()) {
      params = params.set('search', query.search.trim());
    }

    return this.http.get<PagedResponse<DipartimentoTable>>(
      `${API_BASE_URL}${API_ENDPOINTS.dipartimentiList}`,
      {params}
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${API_BASE_URL}${API_ENDPOINTS.dipartimentiList}/${id}`);
  }
}
