import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
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
    return this.http.get(`${environment.ip}/Producto/MostrarTodos`,{headers:this.getHeaders()}).pipe(map (  data => data['Productos']));
  }
  obtenerPrductoActualizar(id:any){
    return this.http.get(`${environment.ip}/Producto/Mostrar/${id}`,{headers:this.getHeaders()}).pipe(map (  data => data['Productos']));
  }
  obtenerProductosTodasCat(id:any){
    return this.http.get(`${environment.ip}/Producto/MostrarNombre/${id}`,{headers:this.getHeaders()}).pipe(map (  data => data['Productos']));
  }
  obtenerBuscador1(id:any, nombre: any){
    return this.http.get(`${environment.ip}/Producto/Buscador1/${id}/${nombre}`,{headers:this.getHeaders()}).pipe(map (  data => data['Productos']));
  }
  eliminarProducto(id:any){
    return this.http.get(`${environment.ip}/Producto/Eliminar/${id}`,{headers:this.getHeaders()});
  }
  modificarProducto(id:any){
    return this.http.get(`${environment.ip}/Producto/Modificar/${id}`,{headers:this.getHeaders()});
  }
}
