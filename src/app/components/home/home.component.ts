
import { Component } from '@angular/core';
import { Router } from '@angular/router';



import { Lista } from 'src/app/models/lista.model';
import { NotasService } from 'src/app/services/notas.service';
import Swal from 'sweetalert2'




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent  {

  lista: Lista ;
  nombreDesc = ''; 
  
  
  constructor( public notasService: NotasService ,
                private router : Router) {   

      
  }

   async agregarNota( ){

   Swal.fire({
    title: 'Nueva Nota!',
    input:'text',
    
    inputPlaceholder:'Ingrese el Titulo',
   
       showCancelButton: true,
       confirmButtonText: "Guardar",
       cancelButtonText: "Cancelar",
   })
   
   .then(resultado => {
       if (resultado.value) {
         
           let titulo = resultado.value;
          const listaId =  this.notasService.crearNota(titulo);

           this.router.navigateByUrl(`/agregar/ ${listaId}`)
           
       }
   });
  
   
  }
  
 
  notaSeleccionada( list:Lista ){
    this.router.navigateByUrl(`/agregar/ ${list.id }`)

  }


  borrarNota(list:Lista){

    Swal.fire({ 
      icon:'question',
      title:'Eliminar nota',
      text:'Seguro',
     
      showCancelButton: true,
      showConfirmButton:true,
    }).then ( resp =>  {
      if (resp.value){
        this.notasService.borrarNota( list );
      }
    })
  }

  editarTitulo(lista:Lista){
    Swal.fire ({
      title: ' Editr Nota!',
      input:'text',
      inputValue:lista.titulo,
     
     
         showCancelButton: true,
         confirmButtonText: "Actualizar",
         cancelButtonText: "Cancelar",
     }).then(resultado => {
      if (resultado.value) {
        
          let titulo = resultado.value;
         
          lista.titulo = titulo;
          
          this.notasService.guardarStorage();
      }
  });

  }

  
}
