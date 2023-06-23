import { Component } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';

interface NavButton {
  route: string;
  buttonName: string;
  isActived: boolean;
}

interface LoginButton{
  name: string;
  route: string;
  isLogged: boolean
}

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {

  navButton: Array<NavButton> = [
    {
      route: "latest",
      buttonName: "Novidades",
      isActived: true
    },
    {
      route: "collections",
      buttonName: "Coleções",
      isActived: false
    },
    {
      route: "deals",
      buttonName: "Ofertas",
      isActived: false
    },
    {
      route: "ps5",
      buttonName: "PS5",
      isActived: false
    },
    {
      route: "subscriptions",
      buttonName: "Assinaturas",
      isActived: false
    },
    {
      route: "browse",
      buttonName: "Navegar",
      isActived: false
    }
  ]

  loginButton: LoginButton = {
    name: 'Iniciar sessão',
    route: 'login',
    isLogged: false
  } 

}
