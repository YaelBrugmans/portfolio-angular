import { Injectable } from '@angular/core';
import { Image } from './image.model';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { BaseApi } from '../portfolio-api/portfolio-api';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService extends BaseApi {

  constructor(private http: HttpClient, private messageService: MessageService) {
    super();
  }

  findAll(): Observable<HttpResponse<Image[]>> {
    return this.http.get<Image[]>(this.SERVER_URL + 'images', {headers: this.httpHeaders, observe: 'response'});
  }

  find(id: number): Observable<HttpResponse<Image>> {
    return this.http.get<Image>(this.SERVER_URL + 'images/' + id, {headers: this.httpHeaders, observe: 'response'});
  }
}
