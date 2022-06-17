import { WorksModel } from './works.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseApi } from '../portfolio-api/portfolio-api';

@Injectable({
  providedIn: 'root'
})
export class WorksService extends BaseApi {

  constructor(private http: HttpClient) {
    super();
  }

  findAll(): Observable<HttpResponse<WorksModel[]>> {
    return this.http.get<WorksModel[]>(this.SERVER_URL + 'api.php?page=works', {headers: this.httpHeaders, observe: 'response'});
  }

  find(id: number): Observable<HttpResponse<WorksModel>> {
    return this.http.get<WorksModel>(this.SERVER_URL + 'api.php?page=works/' + id, {headers: this.httpHeaders, observe: 'response'});
  }
}
