import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private vs: ValidatorService,
    private ev: EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Sebastian vidal',
      email: 'test1@test.com',
      username: 'sebastianvr',
      password: '123456',
      password2: '123456'
    });
  }

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.vs.nombreYApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)],[this.ev]],
    username: ['', [Validators.required, this.vs.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required,]], 
  },
  {
    validator : [this.vs.camposIguales('password', 'password2')]
  })

  get ©():string{
    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.required){
      return 'Email es obligatorio'
    }else if (errors?.pattern){
      return 'Debe tener formato de tipo email'
    }else if (errors?.emailExiste){
      return 'Este email ya existe en la BD'
    }

    return '';
  }

  enviarFormulario() {
    console.log(this.miFormulario.value)
    this.miFormulario.markAllAsTouched();
  }

  esCampoValido(campo: string) {
    return this.miFormulario.get(campo)?.errors
      && this.miFormulario.get(campo)?.touched
  }


}
