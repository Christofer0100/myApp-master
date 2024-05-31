import { Component, NgZone, OnInit } from '@angular/core';
import { autenticacion } from '../services/autenticacion.service';
import { NavigationExtras, Router } from '@angular/router';
import { AUTService } from '../aut.service';


@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.page.html',
  styleUrls: ['./iniciar.page.scss'],
})
export class IniciarPage  {



  user = {
    Gmail: "",         
    Contrasenna: "",  
  };

  constructor(private router: Router, private authService: AUTService, public api: autenticacion, private ngZone: NgZone) {
    }

  ngOnInit() {
  }

  login() {
    this.api.getCliente().subscribe(
      (clientes) => {
        // Resto del código...

        if (clientes && clientes.length > 0) {
          const usuario = this.user.Gmail;
          const contrasena = this.user.Contrasenna;
    

          const cliente = clientes.find((cliente) => cliente.Gmail === usuario );

          if (cliente && cliente.Contrasena === contrasena) {
            console.log('Autenticación exitosa');
            let navigationExtras: NavigationExtras = {
              state: {
                user: this.user,
                cliente: cliente
              }
              
            };
            this.router.navigate(['/carrito']);  
      }   }  }
);}
}
      