import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.css',
  
})
export class ClientDetailComponent {
  constructor(private clienteService: ClienteService, private route: ActivatedRoute) { 
    this.getClientById();
  }

id: number = 0;
getClientById(): void {
const idParam = this.route.snapshot.paramMap.get('id');
this.id = idParam ? parseInt(idParam, 10): 0;
console.log(this.id);
}
}