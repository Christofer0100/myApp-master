import { Component, OnInit } from '@angular/core';
import { autenticacion } from '../services/autenticacion.service';
import { ActivatedRoute } from '@angular/router';

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
    private autenticacion: autenticacion
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
}
