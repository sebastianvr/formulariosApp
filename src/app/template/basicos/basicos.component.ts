import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  //obtengo el campo declarado en la vista para trabajarlo en la logica
  @ViewChild('miFormulario') miFormulario!: NgForm

  objetoFormulario = {
    producto : 'RTX 2080ti',
    precio: 0,
    existencia: 10
  }

  validarPropiedad(): boolean {
    return this.miFormulario?.controls.producto?.invalid && this.miFormulario?.controls.producto?.touched
  }

  isMayorQueCero(): boolean {
    return this.miFormulario?.controls.precio?.touched && this.miFormulario?.controls.precio?.value < 0
  }

  enviarFormulario() {

    //valido que finalmente no envio un numero negativo
    if (this.miFormulario.controls.precio.value < 0) {
      console.log('No paso la prueba')
      return
    }
    console.log('Formulario enviado');
    this.miFormulario.resetForm({
      producto: 'Algo nuevo',
      precio: 0,
      existencia: 0
    });
  }
}
