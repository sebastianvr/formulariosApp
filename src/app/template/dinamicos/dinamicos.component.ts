import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



interface Persona {
  nombre : string,
  favoritos : Favorito[]
}

interface Favorito {
  id: number,
  nombreJuego : string
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  @ViewChild('miFormulario') miFormulario! : NgForm;
  nuevoJuego : string = '';

  persona : Persona = {
    nombre: 'Sebastian',
    favoritos: [
      {
        id: 1,
        nombreJuego: 'Smash Bros'
      },
      {
        id: 2,
        nombreJuego: 'Fifa 2021'
      }
    ]
  }

  enviarFormulario(){
    console.log('Enviando formulario...')
  }

  isNombreEmpty() : boolean {
    if (this.miFormulario?.controls.nombre?.touched && this.miFormulario?.controls.nombre?.value === ""){
      return true
    }
    return false;
  }

  borrarJuego(index : number){
    this.persona.favoritos.splice(index, 1);
  }

  agregarJuego(){
    // console.log(this.nuevoJuego);
    const addJuego : Favorito = {
      id: this.persona.favoritos.length + 1,
      nombreJuego: this.nuevoJuego
    }

    //envio un nuevo juego usando operador spread, evitando paso por referencia
    this.persona.favoritos.push({...addJuego});

    //limpiar formulario
    this.nuevoJuego = " "
  }
}
