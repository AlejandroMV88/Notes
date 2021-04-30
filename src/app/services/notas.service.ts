import { Injectable } from '@angular/core';
//import { Agregar } from '../models/agregar.model';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  listas: Lista[] = [];

  constructor() { 

    this.cargarStorage();
 
  }

  crearNota( titulo:string ){

    const nuevaNota = new Lista(titulo);
    this.listas.push (nuevaNota);
    this.guardarStorage();

    return nuevaNota.id;
  }

  borrarNota(list:Lista){

    this.listas = this.listas.filter(listaData => listaData.id !== list.id);

    this.guardarStorage();
  }

  obtenerNota( id:string | number ){
    
    id = Number(id);

    return this.listas.find( listaData =>  listaData.id === id);
     
  }

  guardarStorage(){
    
    localStorage.setItem('data',JSON.stringify( this.listas) );
  }

  cargarStorage(){

    if(localStorage.getItem('data')){

      this.listas = JSON.parse( localStorage.getItem('data') );

    }else{
      this.listas = [];
    }

    
  }

   

}
