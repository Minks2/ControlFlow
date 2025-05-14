import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categoria-rota-dinamica.component.html',
  styleUrls: ['./categoria-rota-dinamica.component.css']
})
export class CategoriaRotaDinamicaComponent {
  categoriaNome: string = '';

  constructor(private route: ActivatedRoute) {
    this.getCategoriaNome();
  }

  getCategoriaNome(): void {
    const nomeParam = this.route.snapshot.paramMap.get('nome');
    this.categoriaNome = nomeParam ?? '';
    console.log(this.categoriaNome);
  }
}
