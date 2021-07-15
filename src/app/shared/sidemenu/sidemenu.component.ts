import { Component, OnInit } from '@angular/core';


interface MenuItem {
  texto: string,
  path: string
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`
    li{
      cursor: pointer;
    }
  `
  ]
})
export class SidemenuComponent  {
    
  constructor() { }

  templateMenu : MenuItem[] = [
    {
      texto : 'Basicos',
      path: './template/basicos'
    },
    {
      texto : 'Dinámicos',
      path: './template/dinamicos'
    },
    {
      texto : 'Switches',
      path: './template/switches'
    }
  ];

  reactiveMenu : MenuItem[] = [
    {
      texto : 'Basicos',
      path: './reactive/basicos'
    },
    {
      texto : 'Dinámicos',
      path: './reactive/dinamicos'
    },
    {
      texto : 'Switches',
      path: './reactive/switches'
    }
  ];

  authMenu : MenuItem[] = [
    {
      texto : 'Login',
      path: './auth/login'
    },
    {
      texto : 'Registro',
      path: './auth/registro'
    }
  ];
}


