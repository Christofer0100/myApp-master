import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { IonicStorageModule } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})

export class autenticacion {
  
  private baseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {
    this.init();
  }

  async init() {
    //await this.storage.create();
  }







  getProductos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/producto`);
  }

  getProductosPorTipo(tipoProducto: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/productos_por_tipo/?tipo_producto=${tipoProducto}`);
  }
  
  registrarCliente(cliente: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/registrar_cliente/`, cliente);
  }

}
  

