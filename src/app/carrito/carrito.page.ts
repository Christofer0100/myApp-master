import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  carrito: any[] = [];
  total: number = 0;

  constructor(private carritoService: CarritoService) { }

  ngOnInit() {
    this.cargarCarrito();
  }

  ionViewWillEnter() {
    this.cargarCarrito();
  }

  cargarCarrito() {
    this.carrito = this.carritoService.obtenerCarrito();
    this.calcularTotal();
    console.log('Carrito cargado:', this.carrito); // Añade este mensaje
  }

  eliminarDelCarrito(id: number) {
    this.carritoService.eliminarProducto(id);
    this.cargarCarrito();
  }

  calcularTotal() {
    this.total = this.carritoService.calcularTotal();
  }
}