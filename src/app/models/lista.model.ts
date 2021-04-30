import { Agregar } from "./agregar.model";


export class Lista{

    id: number;
    titulo: string;
    CreadaEn: Date;
    descripcion: Agregar[];
  
    constructor( titulo:string  ){
        
        this.titulo = titulo;
        this.CreadaEn = new Date();
        this.descripcion = [];
        this.id = new Date().getTime();
    }
}
