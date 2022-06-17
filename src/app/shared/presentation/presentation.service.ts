import { Presentation } from './presentation.model';
import { Injectable } from '@angular/core';
import { BaseApi } from '../portfolio-api/portfolio-api';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresentationService extends BaseApi{

constructor(private http: HttpClient) {
  super();
}

findAll(): Observable<HttpResponse<Presentation[]>> {
  return this.http.get<Presentation[]>(this.SERVER_URL + 'api.php?page=presentation', {headers: this.httpHeaders, observe: 'response'});
}

find(id: number): Observable<HttpResponse<Presentation>> {
  return this.http.get<Presentation>(this.SERVER_URL + 'api.php?page=presentation/' + id, {headers: this.httpHeaders, observe: 'response'});
}

}
