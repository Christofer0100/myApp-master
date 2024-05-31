import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  
  private apiUrl = 'http://127.0.0.1:8000/'; //Base de datos
  
  constructor(private http: HttpClient) {
    this.init();
  }

  async init() {
    //await this.storage.create();
  }




}

  

