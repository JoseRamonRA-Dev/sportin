import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  datos:any;
  public bandera: boolean = true;
  constructor() {
    this.datos = [];
    for(let i=0; i<10; i++){
      let producto = "prod";
      this.datos.push(producto);
    }
   }
  ngOnInit(): void {
  }

}
