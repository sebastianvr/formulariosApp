import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  //forma menos elegante que un FormBuilder
  // miFormulario : FormGroup= new FormGroup({
  //   'nombre' : new FormControl('RTX 4080ti'),
  //   'precio' : new FormControl(1500),
  //   'existencias' : new FormControl(5)
  // })

  ngOnInit() {

    //seteo mi formulario con valores predeterminados
    this.miFormulario.reset({
      nombre: 'Sebastian',
      precio: 0,
      existencias: null
    });
    
  }
  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [Validators.required, Validators.minLength(3)]],
    precio: [ , [Validators.min(0), Validators.required]],
    existencias: [ , [Validators.min(0), Validators.required]],
  });

  campoNoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched
  }

  guardar() {

    // console.log(this.miFormulario.value);
    // console.log(this.miFormulario);

    if (this.miFormulario.invalid) {
      //cuando el formulario no es valido, todo todos los campos para mostrar todos los errores
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log('Formulario enviado ....')
    //this.miFormulario.reset();

  }
}
