import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_BASE_URL, API_ENDPOINTS} from '../config/api.config';
import {DipendenteTable} from '../models/dipendente';
import {TableQuery} from '../interfaces/table-query';
import {PagedResponse} from '../interfaces/paged-response';

@Injectable({providedIn: 'root'})
export class DipendentiService {

  constructor(private readonly http: HttpClient) {
  };

  getPage(query: TableQuery): Observable<PagedResponse<DipendenteTable>> {
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

    return this.http.get<PagedResponse<DipendenteTable>>(
      `${API_BASE_URL}${API_ENDPOINTS.dipendentiList}`,
      {params}
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${API_BASE_URL}${API_ENDPOINTS.dipendentiList}/${id}`);
  }
}
