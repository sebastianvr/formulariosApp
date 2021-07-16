import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator{

  constructor( private http : HttpClient) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    console.log(control.value);
    const email = control.value;
    return this.http.get<any[]>(`http://localhost:3000/usuarios/?q=${email}`)
      .pipe(
        // delay solo para mostrar el estado del fomulario (PENDING) esperando la respuesta asincrona
        // delay(3000),
        map( resp => {
         return  (resp.length === 0) 
                 ? null
                 : { emailExiste: true }
        })
      )
  }
}
