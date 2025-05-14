import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../interfaces/Categoria';
import { CommonModule } from '@angular/common';
import { CategoriaService } from './../../services/categoria.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  categorias: Categoria[] = [];
  categoriaIdEdicao: string | null = null
  categoriaForm: FormGroup = new FormGroup({});

  constructor(private categoriaService: CategoriaService, private FormBuilder: FormBuilder) {
    this.categoriaForm = FormBuilder.group({
      nome: ['', Validators.required],
      descricao: [''],
      ativa: [true]
    });
  }

  list(): void {
    this.categoriaService.list().subscribe((resposta) => (this.categorias=resposta))
  }
  //metodo executado ao inicializar a página
  ngOnInit(): void {
    this.list()
  }
  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  save() {
  
    if (this.categoriaForm.valid) {
      const formData = this.categoriaForm.value
      const ativaBoolean = formData.ativa === true || formData.ativa === 'true';
  
        if (this.categoriaIdEdicao) {
          const categoriaUpdate: Categoria = {
            id: this.categoriaIdEdicao,
            nome: formData.nome,
            descricao: formData.descricao,
            ativa: ativaBoolean
          }
          this.categoriaService.update(this.categoriaIdEdicao, categoriaUpdate).subscribe(() => {
            alert('Alterado com sucesso!');
            this.list();
          });

          this.categoriaIdEdicao = null

        } else {
          const categoriaAdd: Categoria = {
            id: this.generateRandomString(6),
            nome: formData.nome,
            descricao: formData.descricao,
            ativa: ativaBoolean
          }

          this.categorias.push(categoriaAdd);
          this.categoriaService.add(categoriaAdd).subscribe(); //chamando a service para inserir
          alert('Inserido com sucesso')
          this.list(); // Enviando feedback ao usuário
        }
      }
      else {
        alert('Favor preencher os campos obrigatórios')
      }
      
      
      this.categoriaForm.reset({ ativa: true });
    }

    editar(id: string): void {
      const categoria = this.categorias.find(c => c.id === id);
      if (categoria) {
        this.categoriaIdEdicao = categoria.id;
        this.categoriaForm.patchValue({
          nome: categoria.nome,
          descricao: categoria.descricao,
          ativa: categoria.ativa
        });
      } else {
        alert("Categoria não encontrada.");
      }
    }
    

    remover(id: string): void {
      this.categoriaService.remove(id).subscribe(() => {
        this.categorias = this.categorias.filter(c => c.id !== id);
        alert("Categoria removida com sucesso!");
      });
    }
    
   
}