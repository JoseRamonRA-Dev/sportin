import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-buscadorcategoria',
  templateUrl: './buscadorcategoria.component.html',
  styleUrls: ['./buscadorcategoria.component.css']
})
export class BuscadorcategoriaComponent implements OnInit {
  public bandera: boolean = false;
  public nombre: string = "";
  public categoria: string = "";
  constructor(public activatedRoute: ActivatedRoute) { 
    this.nombre = this.activatedRoute.snapshot.params.nom;
    this.categoria = this.activatedRoute.snapshot.params.cat;
  }

  ngOnInit(): void {
  }

}
