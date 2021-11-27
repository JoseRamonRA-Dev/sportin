import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudproductoService {

  constructor(public http: HttpClient) { }
  private getHeaders(){
    let headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin','*');
    return headers
  }
  insertarProducto(producto: any){
    return this.http.post(`${environment.ip}/Producto/Insertar`,producto,{headers:this.getHeaders()});
  }
  obtenerProductos(){
    return this.http.get(`${environment.ip}/Productos/VerTodos`,{headers:this.getHeaders()});
  }
  obtenerPrductoActualizar(id:any){
    return this.http.get(`${environment.ip}/Producto/Ver/${id}`,{headers:this.getHeaders()});
  }
  eliminarProducto(id:any){
    return this.http.get(`${environment.ip}/Producto/Eliminar/${id}`,{headers:this.getHeaders()});
  }
  modificarProducto(id:any){
    return this.http.get(`${environment.ip}/Producto/Modificar/${id}`,{headers:this.getHeaders()});
  }
}
