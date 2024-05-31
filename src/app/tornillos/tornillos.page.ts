import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { autenticacion } from '../services/autenticacion.service';


@Component({
  selector: 'app-tornillos',
  templateUrl: './tornillos.page.html',
  styleUrls: ['./tornillos.page.scss'],
})
export class TornillosPage implements OnInit {

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
