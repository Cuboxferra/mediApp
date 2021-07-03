import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getUsers(){
    return this.http.get('');

  }

  getMenuOpts(){
    return this.http.get<Componente[]>('/assets/data/menu.json');

  }

}
