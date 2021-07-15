import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  nombreYApellidoPattern: string = '([a-zA-z]+) ([a-zA-z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  /**
   * Validacion personalizada para saber "si este usuario ya existe"
   * @param control 
   * @returns Null cuando pasa la validacion | Un objeto cuando no
   */
  noPuedeSerStrider(control: FormControl) {
    const valor: string = control.value?.trim().toLowerCase();

    if (valor == 'strider') {
      return {
        noStrider: true
      }
    }
    return null
  }


  camposIguales(campo1 : string, campo2: string ){

    return (formGroup : AbstractControl) : ValidationErrors | null  =>{

      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;
      // console.log(pass1 +'-'+ pass2)

      if(pass1 !== pass2){
        //seteo un error en el campo2 (imput de confirmar contraseña) 
        formGroup.get(campo2)?.setErrors({ sonDiferentes : true })
        return {
          sonDiferentes : true
        }
      }

      formGroup.get(campo2)?.setErrors(null)
      return null
    }
  }
}
