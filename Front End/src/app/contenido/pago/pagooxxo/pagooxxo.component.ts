import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import * as pdfFonts from 'pdfmake/build/vfs_fonts';
//import * as pdfMake from 'pdfmake/build/pdfmake';
// import   pdfMake  from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
//import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-pagooxxo',
  templateUrl: './pagooxxo.component.html',
  styleUrls: ['./pagooxxo.component.css']
})
export class PagooxxoComponent implements OnInit {
  public datos: any;
  constructor(public router: Router) {
    this.datos = [];
    for(let i=0; i<3; i++){
      let producto = "prod";
      this.datos.push(producto);
    }
   }

descargarPDF(){
  //const doc = new jsPDF();

  //doc.text('Hello world!', 10, 10);
  //doc.save('hello-world.pdf');
 // Extraemos el
 const DATA = document.getElementById('htmlData');
 const doc = new jsPDF('p', 'pt', 'a4');
 const options = {
   background: 'white',
   scale: 3
 };

 html2canvas(DATA, options).then((canvas) => {

  const img = canvas.toDataURL('image/PNG');

  // Add image Canvas to PDF
  const bufferX = 15;
  const bufferY = 15;
  const imgProps = (doc as any).getImageProperties(img);
  const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
  return doc;
}).then((docResult) => {
  docResult.save(`Sportin_${new Date().toISOString()}.pdf`);
});

}
  ngOnInit(): void {
  }

}
