import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  constructor(private fb: FormBuilder) { }

  //forma menos elegante que un FormBuilder
  // miFormulario : FormGroup= new FormGroup({
  //   'nombre' : new FormControl('RTX 4080ti'),
  //   'precio' : new FormControl(1500),
  //   'existencias' : new FormControl(5)
  // })


  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [Validators.required, Validators.minLength(3)]],
    precio: [ , [Validators.min(0), Validators.required]],
    existencias: [ , [Validators.min(0), Validators.required]],
  });

  campoNoEsValido(campo : string){
    return this.miFormulario.controls[campo].errors 
        && this.miFormulario.controls[campo].touched
  }
}
