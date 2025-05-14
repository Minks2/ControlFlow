import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolacaoComponent } from './components/interpolacao/interpolacao.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { PropertiesBindingComponent } from './components/properties-binding/properties-binding.component';
import { DiretivaComponent } from './components/diretiva/diretiva.component';
import { Carros } from './interfaces/Carros';
import { ClienteComponent } from './components/cliente/cliente.component';
import { HomeComponent } from "./home/home.component";
import { NavComponent } from './components/nav/nav.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent ,InterpolacaoComponent, ControlFlowComponent, PropertiesBindingComponent, DiretivaComponent, ClienteComponent, HomeComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-control-flow';
  carros:Carros[]=[
    {id:1, nome:"Corsa", marca:"GM", ano:1996, placa:"abc2020"},
    {id:2, nome:"Celta", marca:"GM", ano:2000, placa:"cba2021"},
    {id:2, nome:"Onix", marca:"GM", ano:2008, placa:"bca2022"}
  ]
}
