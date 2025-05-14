import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/Cliente'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:3000/clientes'; //URL da API

  //criando uma lista fake, emulando o que receberiamos de uma API
  clientes:Cliente[]=[]

  //injeção de dependência do http
  constructor(private http:HttpClient) {

  }

  list() : Observable <Cliente[]>{
    return this.http.get<Cliente[]>(this.apiUrl) as Observable<Cliente[]>
  }

//retornar a lista de clientes
    // list():Cliente[]{
    //   return this.clientes;
    // }

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

    // add(cliente:Cliente){
    //   this.clientes.push(cliente)
    //   console.log(this.clientes)
    // }

    add(cliente: Cliente) {
      const httpHeaders =
      {
      headers: {
      'Content-Type': 'application/json'
      }
      };
      return this.http.post(this.apiUrl, cliente, httpHeaders);
      //this.clientes.push(cliente);
      //console.log(this.clientes);
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
