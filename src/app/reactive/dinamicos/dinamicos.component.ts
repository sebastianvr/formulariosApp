import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  //inyeccion de dependecia para agregar FormGroup
  constructor(private fb: FormBuilder) { }

  //representacion de el campo nombre, y el arreglo dinamico de favoritos
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Smash Bros', Validators.required],
      ['Fifa 2021', Validators.required],
      ['Mario Kart', Validators.required],
    ], Validators.required)
  })

  //respresentacion logica del input para agregar favorito
  agregaFavorito: FormControl = this.fb.control('', Validators.required)


  //
  get FavoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  esCampoValido(campo: string) {
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched
  }


  agregarFavorito() {
    // console.log(this.agregaFavorito)
    if (this.agregaFavorito.invalid) {
      console.log('Error al agregar nuevo favorito')
      return;
    }

    this.FavoritosArr.push(this.fb.control(this.agregaFavorito.value, Validators.required));
    this.agregaFavorito.reset();
  }

  borrar(index : number){
    return this.FavoritosArr.removeAt(index);
  }


  enviarFormulario() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      console.log('Hubo un error al enviar el formulario')
      return
    }

    console.log('Formulario enviado...')
    console.log(this.miFormulario.value)
  }

}
