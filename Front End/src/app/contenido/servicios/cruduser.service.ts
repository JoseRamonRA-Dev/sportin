import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


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
    return this.http.post(`${environment.ip}/Usuario/Insertar`,usuario,{headers:this.getHeaders()});
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
    return this.http.post(`${environment.ip}/Usuario/Registro`,usuario,{headers:this.getHeaders()});
  }
  iniciarSesion(usuario:any){
    return this.http.post(`${environment.ip}/Usuario/Registro`,usuario,{headers:this.getHeaders()});
  }
}
