import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CruduserService {

 
  constructor(public http: HttpClient) { }
  private getHeaders(){
    let headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin','*');
    return headers
  }
  insertarUsuario(usuario: any){
    return this.http.post(`${environment.ip}/Usuario/Insertar`,usuario,{headers:this.getHeaders()}).pipe(map (  data => data['data']));
  }
  obtenerUsuarios(){
    return this.http.get(`${environment.ip}/Productos/MostrarTodos`,{headers:this.getHeaders()});
  }
  obtenerUsuarioActualizar(id:any){
    return this.http.get(`${environment.ip}/Usuario/Ver/${id}`,{headers:this.getHeaders()});
  }
  eliminarUsuario(id:any){
    return this.http.get(`${environment.ip}/Usuario/Eliminar/${id}`,{headers:this.getHeaders()});
  }
  modificarUsuario(id:any){
    return this.http.get(`${environment.ip}/Usuario/Modificar/${id}`,{headers:this.getHeaders()});
  }
  registrarUsuario(usuario:any){
    return this.http.post(`${environment.ip}/Usuario/Registro`,usuario,{headers:this.getHeaders()}).pipe(map (  data => data['data']));
  }
  iniciarSesion(usuario:any, contrasena:any){
    const body = {
      email: usuario,
      contra: contrasena
    }
    return this.http.post(`${environment.ip}/Usuario/login`,body,{headers:this.getHeaders()});
  }

  buscarCodigo(cod:any){
    return this.http.get(`${environment.ip}/CP/RegresarIDCod/${cod}`,{headers:this.getHeaders()}).pipe(map (  data => data['cod_postal']));
  }
  crearDireccion(dir: any){
    return this.http.post(`${environment.ip}/Direccion/Insertar`,dir,{headers:this.getHeaders()});
  }
}
