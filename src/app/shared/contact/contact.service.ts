import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { BaseApi } from '../portfolio-api/portfolio-api';
import {Contact} from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends BaseApi {

  constructor(private http: HttpClient) { super(); }

  findAll(): Observable<HttpResponse<Contact[]>> {
    return this.http.get<Contact[]>(this.SERVER_URL + 'contacts', {headers: this.httpHeaders, observe: 'response'});
  }

  create(contact: Contact): Observable<HttpResponse<Contact>>{
    return this.http.post<Contact>(this.SERVER_URL + 'contacts/', contact, {headers: this.httpHeaders, observe: 'response'});
  }

  postContactForm(contact: Contact) : Observable<HttpResponse<Contact>> {
    return this.http.post<Contact>(this.SERVER_URL, contact, {observe: 'response'});
  }

}

