import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
@Injectable()
export class UsuarioService {
  usuario: Usuario;
  token: string;

  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    this.cargarStoraged();
    console.log('servicio de usuario listo');
  }

  estaLogueado() {
    return ( this.token.length > 0) ? true : false;
  }

  cargarStoraged() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  guardarStorage( id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
      localStorage.setItem('token', token);
      localStorage.setItem('Usuario', JSON.stringify(Usuario) );

      this.usuario = usuario;
      this.token = token;
  }

  logout() {
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('Usuario');

    this.router.navigate(['/login']);
  }


  loginGoogle( token: string) {
    let url = URL_SERVICIOS + '/login/google';
    return this.http.post(url, {token}).map( (resp: any) => {
      this.guardarStorage(resp.id, resp.token, resp.Usuario);
      return true;
    });
  }


  login(usuario: Usuario, recordar: boolean = false ) {

    if (recordar) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }
    let url = URL_SERVICIOS + '/login';
    return this.http.post(url, usuario).map( (resp: any) => {

      this.guardarStorage(resp.id, resp.token, resp.Usuario);

      return true;
    });
  }

  crearUsuario(usuario: Usuario) {
    let url = URL_SERVICIOS + '/usuario';
    return this.http.post(url, usuario).map((resp: any) => {
      swal('Usuario creado', usuario.email, 'success');
      return resp.usuario;
    });
  }


}
