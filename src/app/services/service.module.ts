import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  SettingsService,
  SidebarService,
  ShredService,
  UsuarioService,
  LoginGuardGuard
} from './service.index';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [
    SettingsService,
    SidebarService,
    ShredService,
    UsuarioService,
    LoginGuardGuard
  ]
})
export class ServiceModule { }
