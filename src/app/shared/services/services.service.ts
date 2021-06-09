import { Services } from './services.model';
import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { BaseApi } from '../portfolio-api/portfolio-api';

@Injectable({
  providedIn: 'root'
})
export class ServicesService extends BaseApi{

  constructor(private httpClient: HttpClient) {
    super();
  }

  findAll(): Observable<HttpResponse<Services[]>> {
    return this.httpClient.get<Services[]>(this.SERVER_URL + 'services', {headers: this.httpHeaders, observe: 'response'});
  }

  find(id: number): Observable<HttpResponse<Services>> {
    return this.httpClient.get<Services>(this.SERVER_URL + 'services/' + id, {headers: this.httpHeaders, observe: 'response'});
  }
}
