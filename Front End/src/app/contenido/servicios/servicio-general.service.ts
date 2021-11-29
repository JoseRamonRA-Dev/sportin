import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServicioGeneralService {
  constructor(public http: HttpClient) { }
  private getHeaders(){
    let headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin','*');
    return headers
  }
  // insertarUsuario(usuario: any){
  //   return this.http.post(`${environment.ip}/Usuario/Insertar`,usuario,{headers:this.getHeaders()});
  // }
  // obtenerUsuarios(){
  //   return this.http.get(`${environment.ip}/Productos/MostrarTodos`,{headers:this.getHeaders()});
  // }
   insertarWishList(wish:any){
    return this.http.post(`${environment.ip}/Wish/Insertar`,wish,{headers:this.getHeaders()});
   }
   obtenerDepartementos(){
    return this.http.get(`${environment.ip}/Departamento/MostrarTodos`,{headers:this.getHeaders()}).pipe(map (  data => data['departamentos']));
  }
  obtenerNomDepartemento(nombre:any){
    return this.http.get(`${environment.ip}/Departamento/BuscarNombre/${nombre}`,{headers:this.getHeaders()}).pipe(map (  data => data['departamento']));
  }
}
