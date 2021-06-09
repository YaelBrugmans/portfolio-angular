import { Travaux } from './travaux.model';
import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { BaseApi } from '../portfolio-api/portfolio-api';

@Injectable({
  providedIn: 'root'
})
export class TravauxService extends BaseApi {

  constructor(private http: HttpClient) {
    super();
  }

  findAll(): Observable<HttpResponse<Travaux[]>> {
    return this.http.get<Travaux[]>(this.SERVER_URL + 'travauxes', {headers: this.httpHeaders, observe: 'response'});
  }

  find(id: number): Observable<HttpResponse<Travaux>> {
    return this.http.get<Travaux>(this.SERVER_URL + 'travauxes/' + id, {headers: this.httpHeaders, observe: 'response'});
  }
}
