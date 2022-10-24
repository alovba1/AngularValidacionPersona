import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
 /*
  personas: Persona[]=
  [
    {id:1, name:"Rain", apellidos:"Usa"}
  ];
  */
   personas:Persona[];
  constructor(private service:ServiceService, private router:Router) { this.personas=[]}

  ngOnInit(){
 this.service.getPersonas()
 .subscribe(data=>{
   this.personas=data;
  })
  }
  Editar(persona:Persona){
    alert("Editar");
   localStorage.setItem("id",persona.id.toString());
   
   alert("id: "+persona.id.toString());
   
   this.router.navigate(["edit"]);
  }
  
  Borrar(id:number){
    this.service.DeletePersonaId(id).subscribe(
      data=>{
        alert("Borrar");
       this.router.navigate(["listar"]);
      });
    
  }
}
