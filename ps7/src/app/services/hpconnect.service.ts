import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HpModel} from '../models/hpModel';

@Injectable({
  providedIn: 'root'
})
export class HpconnectService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  contactsEndpoint = 'http://localhost:3000/ps6';

  getHouse(): Observable<HpModel[]> {
    return this.httpClient.get<HpModel[]>(this.contactsEndpoint);
  }

  constructor(private httpClient: HttpClient) { }
}

