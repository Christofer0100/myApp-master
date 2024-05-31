import { Component, OnInit } from '@angular/core';
import { autenticacion } from '../services/autenticacion.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage  {

  cliente = {
    idCliente: '',
    NombreCliente: '',
    RutCliente: '',
    Gmail: '',
    Contrasenna: ''
  };

  constructor(private autenticacion: autenticacion, private router: Router) {}

  registrar() {
    // Validar datos antes de enviar
    if (!this.cliente.NombreCliente || !this.cliente.RutCliente || !this.cliente.Gmail || !this.cliente.Contrasenna) {
      console.error('Todos los campos son requeridos');
      return;
    }

    this.autenticacion.registrarCliente(this.cliente).subscribe(response => {
      console.log('Cliente registrado correctamente', response);
      this.router.navigate(['/inicio']);
    }, error => {
      console.error('Error al registrar el cliente', error);
    });
  }
}


