import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public bandera: Boolean = true;
  constructor(public route:Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
