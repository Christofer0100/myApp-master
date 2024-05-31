import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  
  public carrito: any[] = [];

  constructor() { }

  agregarProducto(producto: any) {
    this.carrito.push(producto);
  }

  obtenerCarrito() {
    return this.carrito;
  }

  eliminarProducto(id: number) {
    this.carrito = this.carrito.filter(producto => producto.idProducto !== id);
  }

  calcularTotal() {
    return this.carrito.reduce((total, producto) => total + producto.Precio, 0);
  }
}