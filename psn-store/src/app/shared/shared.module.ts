import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/top-menu/components/button/button.component';
import { ButtonLoginComponent } from './components/top-menu/components/button-login/button-login.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TopMenuComponent,
    FooterComponent,
    ButtonComponent,
    ButtonLoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TopMenuComponent,
    FooterComponent
  ]
})
export class SharedModule { }
