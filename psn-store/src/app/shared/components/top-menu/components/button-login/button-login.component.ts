import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-login',
  templateUrl: './button-login.component.html',
  styleUrls: ['./button-login.component.scss']
})
export class ButtonLoginComponent {
  @Input() buttonName: string = '';
  @Input() route: string = '';
  @Input() isLogged: boolean = false;
}
