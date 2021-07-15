import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue]
  });

  ngOnInit() {
    //  this.miFormulario.setValue(this.persona);
    this.miFormulario.reset({
      ...this.persona,
      condiciones: false
    });

    /**
     * las siguientes lineas de codigo son opcionales, la idea de lo sgte es tener el objeto persona actualizado segun los 
     * cambios de miFormulario, esto se hace a traves de un observer que notificará los cambios y seran actualizados 
     * en objeto persona
     */

    this.miFormulario.valueChanges.subscribe(({condiciones, ...rest}) =>{
      this.persona = rest;
    });
  }

  persona = {
    genero: 'F',
    notificaciones: true

  }

  //tomar el valor del formulario y establecerselo a la persona
  guardar(){
    //creo una copia de miFormulario para evitar paso por referencia
    const formValue = {...this.miFormulario.value};
    
    //elimino el campo que no necesito
    delete formValue.notificaciones;
    this.persona = formValue;

  }
}
