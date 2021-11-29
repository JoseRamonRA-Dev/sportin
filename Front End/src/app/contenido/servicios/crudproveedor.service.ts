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
  eliminarProveedor(id:any){
    return this.http.get(`${environment.ip}/Proveedor/Eliminar/${id}`,{headers:this.getHeaders()});
  }
  modificarProveedor(id:any){
    return this.http.get(`${environment.ip}/Proveedor/Modificar/${id}`,{headers:this.getHeaders()});
  }
  
}
