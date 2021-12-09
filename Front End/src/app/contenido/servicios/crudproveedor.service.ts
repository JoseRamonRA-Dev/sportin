import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudproveedorService {

  constructor(public http: HttpClient) { }
  private getHeaders(){
    let headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin','*');
    return headers
  }
  insertarProveedor(proveedor: any){
    return this.http.post(`${environment.ip}/Proveedor/Insertar`,proveedor,{headers:this.getHeaders()});
  }
  obtenerProveedores(){
    return this.http.get(`${environment.ip}/Proveedor/VerTodos`,{headers:this.getHeaders()}).pipe(map (  data => data['prov']));
  }
   obtenerProveedorActualizar(id:any){
    return this.http.get(`${environment.ip}/Proveedor/Ver/${id}`,{headers:this.getHeaders()}).pipe(map (  data => data['prov']));
  }
  obtenerProveedorId(id:any){
    return this.http.get(`${environment.ip}/Proveedor/Ver/${id}`,{headers:this.getHeaders()}).pipe(map (  data => data['prov']));
  }
  eliminarProveedor(id:any){
    return this.http.get(`${environment.ip}/Proveedor/Eliminar/${id}`,{headers:this.getHeaders()});
  }
  modificarProveedor(id:any, data:any){
    return this.http.put(`${environment.ip}/Proveedor/Modificar/${id}`,data,{headers:this.getHeaders()});
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
}
