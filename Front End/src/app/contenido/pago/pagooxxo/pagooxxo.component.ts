import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
//import * as pdfFonts from 'pdfmake/build/vfs_fonts';
//import * as pdfMake from 'pdfmake/build/pdfmake';
// import   pdfMake  from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
//import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ServicioGeneralService } from '../../servicios/servicio-general.service';
import { CrudproductoService } from '../../servicios/crudproducto.service';

@Component({
  selector: 'app-pagooxxo',
  templateUrl: './pagooxxo.component.html',
  styleUrls: ['./pagooxxo.component.css'],
})
export class PagooxxoComponent implements OnInit {
  public datos: any;
  public productos: any;
  public total: number = 0;
  public totalFinal: number = 0;
  constructor(
    public router: Router,
    public carrito: ServicioGeneralService,
    public servicio: CrudproductoService
  ) {
    this.datos = [];
    this.servicio.obtenerProductos().subscribe((res) => {
      this.productos = res;
    });
    this.carrito
      .mostrarDetalles(localStorage.getItem('id_carrito'))
      .subscribe((respuesta) => {
        this.datos = respuesta;
        console.log(respuesta);
      });
    this.carrito
      .mostrarPedido(localStorage.getItem('id_carrito'))
      .subscribe((respuesta: any) => {
        console.log('carrito');
        console.log(respuesta.ped);

        this.totalFinal = respuesta.ped.Total;
      });
  }

  nombreProducto(idprod, total: any) {
    this.total = this.total + total;
    for (let dato of this.productos) {
      if (dato._id == idprod) {
        return dato.Nombre;
      }
    }
  }
  descargarPDF() {
    let body = {
      id_us: localStorage.getItem('id_usuario'),
      fp: new Date(),
      de: 'Se realizo la compra',
      Tipo: 'Pago Oxxo',
      NoTarjeta: 0,
      Banco: '',
    };
    this.carrito
      .carritoAcompra(localStorage.getItem('id_carrito'), body)
      .subscribe((respuesta) => {
        //const doc = new jsPDF();

        //doc.text('Hello world!', 10, 10);
        //doc.save('hello-world.pdf');
        // Extraemos el
        const DATA = document.getElementById('htmlData');
        const doc = new jsPDF('p', 'pt', 'a4');
        const options = {
          background: 'white',
          scale: 3,
        };

        html2canvas(DATA, options)
          .then((canvas) => {
            const img = canvas.toDataURL('image/PNG');

<<<<<<< HEAD
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
      this.carrito.obtenerCarrito(localStorage.getItem("id_usuario")).subscribe((resultado)=>{
        //localStorage.setItem("id_carrito","" );
=======
            // Add image Canvas to PDF
            const bufferX = 15;
            const bufferY = 15;
            const imgProps = (doc as any).getImageProperties(img);
            const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            doc.addImage(
              img,
              'PNG',
              bufferX,
              bufferY,
              pdfWidth,
              pdfHeight,
              undefined,
              'FAST'
            );
            return doc;
          })
          .then((docResult) => {
            docResult.save(`Sportin_${new Date().toISOString()}.pdf`);
          });
        this.router.navigate(['/home']);
        localStorage.setItem('id_carrito', '');
>>>>>>> cc1788c70a2ee1c5b020da59a1fa7e1bb4e9e1c5
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Se realizo la compra',
          showConfirmButton: false,
<<<<<<< HEAD
          timer: 1500
        })
        localStorage.setItem("id_carrito",resultado[0]._id );
        this.router.navigate([`/home`]);
      });
    
  });
  

}
  ngOnInit(): void {
=======
          timer: 1500,
        });
      });
>>>>>>> cc1788c70a2ee1c5b020da59a1fa7e1bb4e9e1c5
  }
  ngOnInit(): void {}
}
