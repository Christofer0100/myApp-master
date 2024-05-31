import { Component, OnInit } from '@angular/core';
import { autenticacion } from '../services/autenticacion.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage  {

  producto: any[] = [];
  tipoProducto: string = '';

  constructor(private router: Router, private autenticacionService: autenticacion) {}

  mostrarProductosPorTipo(tipoProducto: string) {
    this.router.navigate(['/materiales'], { queryParams: { tipoProducto: tipoProducto } });
  }

  mostrarProductosPorTipo2(tipoProducto: string) {
    this.router.navigate(['/manuales'], { queryParams: { tipoProducto: tipoProducto } });
  }

  mostrarProductosPorTipo3(tipoProducto: string) {
    this.router.navigate(['/seguridad'], { queryParams: { tipoProducto: tipoProducto } });
  }

  mostrarProductosPorTipo4(tipoProducto: string) {
    this.router.navigate(['/medicion'], { queryParams: { tipoProducto: tipoProducto } });
  }

  mostrarProductosPorTipo5(tipoProducto: string) {
    this.router.navigate(['/fijaciones'], { queryParams: { tipoProducto: tipoProducto } });
  }

  mostrarProductosPorTipo6(tipoProducto: string) {
    this.router.navigate(['/tornillos'], { queryParams: { tipoProducto: tipoProducto } });
  }

  
}

