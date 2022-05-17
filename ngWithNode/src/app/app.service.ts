import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseURL = 'http://localhost:8000'
  constructor(private httpClient: HttpClient) { }

  getApi(){
    return this.httpClient.get(this.baseURL+'/getFile')
  }
}
