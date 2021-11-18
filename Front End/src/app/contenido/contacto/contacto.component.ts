import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

//const nodemailer = require('nodemailer')

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'curso.node.intersemestral@gmail.com',
//     pass: 'curso2021'
//   }
// })

// var mailOptions = {
//   from: 'curso.node.intersemestral@gmail.com',
//   to: 'marie.serna11@gmail.com',
//   subject: 'Prueba con Node',
//   text: 'saludos',
//   html: '<font color=#ff0000>Texto con HTML</font>',
//   attachments: [{
//     filename: '1.jpg',
//     path: '1.jpg'
//   }]
// }

// transporter.sendMail(mailOptions, function (erro, info) {
//   if (erro) {
//     console.log(erro)
//   } else {
//     console.log('correo enviado' + info.response)
//   }
// })

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  enviar() {
    console.log("enviar")
  }

  // nodemailer = require('nodemailer');
  // transporter = this.nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: 'curso.node.intersemestral@gmail.com',
  //     pass: 'curso2021'
  //   }
  // });
  // mailOptions = {
  //   from: 'curso.node.intersemestral@gmail.com',
  //   to: 'marie.serna11@gmail.com',
  //   subject: 'Prueba con Node',
  //   text: 'saludos',
  //   html: '<font color=#ff0000>Texto con HTML</font>',
  //   attachments: [{
  //     filename: '1.jpg',
  //     path: '1.jpg'
  //   }]
  // };

  // this.transporter.sendMail(this.mailOptions, function (erro, info) {
  //   if (erro) {
  //     console.log(erro)
  //   } else {
  //     console.log('correo enviado' + info.response)
  //   }
  // });

  

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit() {
    

  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


}

