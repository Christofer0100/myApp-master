import { Component, OnInit } from '@angular/core';
import { autenticacion } from '../services/autenticacion.service';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-manuales',
  templateUrl: './manuales.page.html',
  styleUrls: ['./manuales.page.scss'],
})
export class ManualesPage implements OnInit {


  ProductosPorTipo: any[] = [];

  productos: any[] = [];
  tipoProducto: string= ' ';

  constructor(
    private route: ActivatedRoute,
    private autenticacion: autenticacion,
    private carritoService: CarritoService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.tipoProducto = params['tipoProducto'];
      this.cargarProductosPorTipo();
    });
  }

  cargarProductosPorTipo() {
    this.autenticacion.getProductosPorTipo(this.tipoProducto).subscribe(data => {
      this.productos = data;
    });
  }

  agregarAlCarrito(producto: any) {
    console.log('Producto añadido al carrito:', producto); // Añade este mensaje
    this.carritoService.agregarProducto(producto);
  }

}
