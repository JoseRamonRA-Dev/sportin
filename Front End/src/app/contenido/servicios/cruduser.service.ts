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
    return this.http.get(`${environment.ip}/Usuario/MostrarTodos`,{headers:this.getHeaders()}).pipe(map (  data => data['users']));
  }
  obtenerUsuarioActualizar(id:any){
    return this.http.get(`${environment.ip}/Usuario/Ver/${id}`,{headers:this.getHeaders()});
  }
  eliminarUsuario(id:any){
    return this.http.get(`${environment.ip}/Usuario/Eliminar/${id}`,{headers:this.getHeaders()});
  }
  modificarUsuario(id:any, data:any){
    return this.http.put(`${environment.ip}/Usuario/Modificar/${id}`, data,{headers:this.getHeaders()});
  }
  registrarUsuario(usuario:any){
    return this.http.post(`${environment.ip}/Usuario/Registro`,usuario,{headers:this.getHeaders()}).pipe(map (  data => data['data']));
  }
  iniciarSesion(usuario:any, contrasena:any){
    const body = {
      Email: usuario,
      Contrasena: contrasena
    }
    return this.http.post(`${environment.ip}/Usuario/login`,body,{headers:this.getHeaders()});
  }

  buscarCodigo(cod:any){
    return this.http.get(`${environment.ip}/CP/RegresarIDCod/${cod}`,{headers:this.getHeaders()}).pipe(map (  data => data['cod_postal']));
  }
  crearDireccion(dir: any){
    return this.http.post(`${environment.ip}/Direccion/Insertar`,dir,{headers:this.getHeaders()});
  }
  obtenerDireccioUser(id:any){
    return this.http.get(`${environment.ip}/Direccion/MostrarTodasPorUsuario/${id}`,{headers:this.getHeaders()}).pipe(map (  data => data['dirs']));
  }
  buscarCodigoXiD(cod:any){
    return this.http.get(`${environment.ip}/CP/Mostrar/${cod}`,{headers:this.getHeaders()}).pipe(map (  data => data['cod_postal']));
  }
  modificarDireccion(id:any, data:any){
    return this.http.put(`${environment.ip}/Direccion/Modificar/${id}`,data,{headers:this.getHeaders()});
  }
  verificarMembresia(id_user){
    return this.http.get(`${environment.ip}/Membresia/VerificarExistencia/${id_user}`,{headers:this.getHeaders()}).pipe(map (  data => data['membresia']));
  }
  crearMembresia(usuario: any){
    return this.http.post(`${environment.ip}/Membresia/Insertar`,usuario,{headers:this.getHeaders()});
  }
  todasMembresias(){
    return this.http.get(`${environment.ip}/Membresia/MostrarTodos`,{headers:this.getHeaders()}).pipe(map (  data => data['membresia']));
  }
}
