import { Injectable } from '@angular/core';
import { Index } from './index.model';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { BaseApi } from '../portfolio-api/portfolio-api';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class IndexService extends BaseApi {

  constructor(private http: HttpClient, private messageService: MessageService) {
    super();
  }

  findAll(): Observable<HttpResponse<Index[]>> {
    return this.http.get<Index[]>(this.SERVER_URL + 'indices', {headers: this.httpHeaders, observe: 'response'});
  }

  find(id: number): Observable<HttpResponse<Index>> {
    return this.http.get<Index>(this.SERVER_URL + 'indices/' + id, {headers: this.httpHeaders, observe: 'response'});
  }
}
