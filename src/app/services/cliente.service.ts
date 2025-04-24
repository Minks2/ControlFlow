import { Injectable } from '@angular/core';
import {Cliente} from '../interfaces/Cliente'
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  //criando uma lista fake, emulando o que receberiamos de uma API
  clientes:Cliente[]=[
    {id:"sksksk", nome: "Thiago", telefone:"1231233"},
    {id:"skskada", nome: "Henrique", telefone:"312432545"},
    {id:"sksasdeaw", nome: "Patrick",}
  ]

  constructor() {}
//retornar a lista de clientes
    list():Cliente[]{
      return this.clientes;
    }

    //método para remover cliente
    remove(id:string){
      const cliente= this.clientes.find(c=> c.id===id) //buscar por id
      if(cliente){ // Se encontrar o cliente
        //busca index
        const index= this.clientes.indexOf(cliente)
        //remove da lista
        this.clientes.splice(index, 1)
      }
    }

    add(cliente:Cliente){
      this.clientes.push(cliente)
      console.log(this.clientes)
    }

    update(id:string, cliente:Cliente){
      const index= this.clientes.findIndex(c=> c.id===id);
      if(index!== -1){
        this.clientes[index]= {
          ...this.clientes[index],
          ...cliente
        }
      }
    }

}
