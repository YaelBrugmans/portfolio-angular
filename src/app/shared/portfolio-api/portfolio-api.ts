import {HttpHeaders} from '@angular/common/http';

export abstract class BaseApi {

  private readonly _SERVER_URL = 'https://brugmans.bes-webdeveloper-seraing.be/portfolio-crud/';
  private db = 'portfolio';
  private prefix = 'portfolio_';
  // private readonly _SERVER_URL = 'http://localhost/phpmyadmin/index.php?db=' + this.db + '&table=' + this.prefix;

  private _httpHeaders = new HttpHeaders({
    'Content-Type':  'application/json',
    Accept: 'application/json'
  });

  get SERVER_URL(): string {
    return this._SERVER_URL;
  }

  get httpHeaders(): HttpHeaders {
    return this._httpHeaders;
  }
}
