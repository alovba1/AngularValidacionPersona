import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserValidator } from 'src/app/Validaciones';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

 public mostrarDatos:boolean=false;

 

  id : number = 0;
  name="";
  apellidos="";
  documento="";
  correo="";
  genero="";
  edad="";
  pasatiempo="";

dataFormServer = {};
registered = false;
errorRegistered=false;
channelForm: FormGroup; 




  constructor(private router:Router, private service:ServiceService, public fb:FormBuilder) {
  this.mostrarDatos=true;

 

    this.channelForm=this.fb.group({
id : '',
name: ['',Validators.compose([
  Validators.required,
  Validators.minLength(3),
  UserValidator.verificarDatos
])]
})
}

  ngOnInit()  {
  }
 


  Guardar()
  {
    const persona = new Persona(this.id,this.name,this.apellidos,this.documento,this.correo,this.genero,this.edad,this.pasatiempo);
    
    if(this.id == 0)
    {
      alert("el id es requerido"+this.id);
      return false;
    }
    
if(this.name == "")
{
  alert("el nombre es requerido"+this.name);
  return false;
}

if(this.documento == "")
{
  alert("el documento es requerido"+this.documento);
  return false;
}

if(this.genero == "")
{
  alert("el genero es requerido"+this.genero);
  return false;
}
if(this.pasatiempo == "")
{
  alert("el pasatiempo es requerido"+this.pasatiempo);
  return false;
}

if(this.correo == "")
{
  alert("el correo es requerido"+this.pasatiempo);
  return false;
}
else
{
  if((this.correo.indexOf('.')>=0) && (this.correo.indexOf('@')>=0))
  {
    alert("el correo tiene formato"+this.correo);
  }
  else
  {
    alert("el correo no tiene formato correcto"+this.correo);
    return false;
  }
}

if(this.genero=="Masculino")
 {
  alert("genero"+this.genero);
  this.mostrarDatos=true;
 }
 else
 {
  alert("No visualiza el cuadro edad");
  this.mostrarDatos=false;
 }

    this.service.createPersona(persona).subscribe(
      data=>{
        alert("se agrego con exito y visualiza el campo edad");
       this.router.navigate(["listar"]);
      },
      error=>{
             }
    )
}


}