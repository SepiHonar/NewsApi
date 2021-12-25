import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IApiRepository } from '../models/api-repository';

@Injectable({
  providedIn: 'root'
})
export class ApiRepositoryService implements IApiRepository {

  constructor(
    private httpClient: HttpClient
  ) { }


  getNews(params: HttpParams): Observable<any> {
    return this.httpClient.get(environment.baseURL, { params: params })
  }
}
