import { Component } from '@angular/core';
import { TransbankService } from '../transbank.service';

@Component({
  selector: 'app-fijaciones',
  templateUrl: './fijaciones.page.html',
  styleUrls: ['./fijaciones.page.scss'],
})


export class FijacionesPage {

  buyOrderCounter: number = 1;
  sesionidCounter: number = 1;



  constructor(private transbankService: TransbankService) { }

  Crear_transaccion() {

    const buy_order = this.buyOrderCounter++;
    const session_id = this.sesionidCounter++;

    const data = {
      buy_order: buy_order.toString(),
      session_id: session_id.toString(),
      amount: 8800,
      return_url: "http://localhost:8100/inicio"
    };

    this.transbankService.Crear_transaccion(data).subscribe(response => {
      console.log('Transacción iniciada:', response);
      // Maneja la respuesta de la API
      // Obtener la URL de pago de la respuesta
      const urlPago = response.data.urlCompleta;
      console.log(response.data.token)
      // Abrir la URL de pago en una nueva pestaña del navegador
      //window.location.href = urlPago;



    }, error => {
      console.error('Error al iniciar la transacción:', error);
      // Maneja el error
    });
  }

}
