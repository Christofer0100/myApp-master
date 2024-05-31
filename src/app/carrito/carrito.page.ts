import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { TransbankService } from '../transbank.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  buyOrderCounter: number = 1;
  sesionidCounter: number = 1;

  carrito: any[] = [];
  total: number = 0;

  constructor(private carritoService: CarritoService, private transbankService: TransbankService) { }

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

  Crear_transaccion() {

    const buy_order = this.buyOrderCounter++;
    const session_id = this.sesionidCounter++;

    const data = {
      buy_order: buy_order.toString(),
      session_id: session_id.toString(),
      amount: this.total,
      return_url: "http://localhost:8100/inicio"
    };

    this.transbankService.Crear_transaccion(data).subscribe(response => {
      console.log('Transacción iniciada:', response);
      // Maneja la respuesta de la API
      // Obtener la URL de pago de la respuesta
      const urlPago = response.data.urlCompleta;
      console.log(response.data.token)
      // Abrir la URL de pago en una nueva pestaña del navegador
      window.location.href = urlPago;



    }, error => {
      console.error('Error al iniciar la transacción:', error);
      // Maneja el error
    });
  }
}