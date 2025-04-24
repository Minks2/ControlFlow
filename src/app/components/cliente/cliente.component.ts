import { ClienteService } from './../../services/cliente.service';
import { Component, NgModule } from '@angular/core';
import { Cliente } from '../../interfaces/Cliente';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
clienteForm : FormGroup= new FormGroup({});
clientes:Cliente[]=[];
constructor(
  private clienteService:ClienteService,
  private FormBuilder:FormBuilder){
this.clienteForm= FormBuilder.group({
  nome:['', Validators.required],
  telefone:['']
})

}

list(): void{
  this.clientes= this.clienteService.list()
}
//metodo executado ao inicializar a página
ngOnInit(): void{
this.list()
}
save(){
  if(this.clienteForm.valid){
    alert('Podemos salvar!')
  }
}
}
