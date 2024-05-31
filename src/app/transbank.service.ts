import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TransbankService {

  private transbankUrl = 'https://localhost:44329/api/Transbank'; //transbank url

  constructor(private http: HttpClient) { }

 
  Crear_transaccion(data: any): Observable<any> {
    return this.http.post(`${this.transbankUrl}/Crear_transaccion`, data);
  }

  Confirmar_transaccion(data: any): Observable<any> {
    return this.http.post(`${this.transbankUrl}/Confirmar_Transaccion`, data);
  }

}