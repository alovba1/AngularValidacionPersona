import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id : number = 0;
  name="";
  apellidos="";
  documento="";
  correo="";
  genero="";
  edad="";
  pasatiempo="";
  constructor(private router:Router, private service:ServiceService) {
   }

  ngOnInit(): void {
//   this.Editar();
  }


 Editar()
 {
   const persona = new Persona(this.id,this.name,this.apellidos,this.documento,this.correo,this.genero,this.edad,this.pasatiempo);
   alert("valor id"+this.id);
   this.service.updatePersona(persona).subscribe(
     data=>{
       alert("se agrego con exito"+this.id);
      this.router.navigate(["listar"]);
     },
     error=>{

     }
   )
}

}

