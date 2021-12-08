import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const coincidencias = [];
    if (args === '') return value;
    for (const res of value) {
     
      if ((res.Nombre.toLowerCase().indexOf(args.toLowerCase()) > -1)) {
        coincidencias.push(res);
      };
    };
    
    return coincidencias;
  }

}
