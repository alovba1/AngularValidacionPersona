import { NodeCompatibleEventEmitter } from "rxjs/internal/observable/fromEvent";

export class Persona {
   id:number;
   name:String;
   apellidos:String;
   documento:String;
   correo:String;
   genero:String;
   edad:String;
   pasatiempo:String;
   
   constructor(id: number, name:string, apellidos:string, documento:string, correo:string, genero:string, edad:string,pasatiempo:string) {
        this. id=id; 
        this.name=name;
        this.apellidos=apellidos;
        this.documento=documento;
        this.correo=correo;
        this.genero=genero;
        this.edad=edad;
        this.pasatiempo=pasatiempo;
      }
    }