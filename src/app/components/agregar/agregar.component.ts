import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agregar } from 'src/app/models/agregar.model';

import { Lista } from 'src/app/models/lista.model';
import { NotasService } from 'src/app/services/notas.service';


 
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  
})
export class AgregarComponent implements OnInit {

  lista: Lista;
  nombreDesc = '';   

  constructor( private notasService: NotasService ,
                private route: ActivatedRoute, private router : Router) { 
      
        const listaId = this.route.snapshot.paramMap.get('listaId');

        this.lista = this.notasService.obtenerNota( listaId );

        
    }

  ngOnInit(): void {
  }


  agregarCons(){
      
    if( this.nombreDesc.length === 0){
      return;
    }

    const nuevoDesc = new Agregar(this.nombreDesc);

    this.lista.descripcion.push( nuevoDesc );

    this.nombreDesc = '';
    
    this.notasService.guardarStorage();
 
   }

    borrar(i:number){
      
      this.lista.descripcion.splice( i , 1 );

      this.notasService.guardarStorage();
    }
  
}
