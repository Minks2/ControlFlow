import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolacaoComponent } from './compenents/interpolacao/interpolacao.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { PropertiesBindingComponent } from './components/properties-binding/properties-binding.component';
import { DiretivaComponent } from './components/diretiva/diretiva.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InterpolacaoComponent, ControlFlowComponent, PropertiesBindingComponent, DiretivaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-control-flow';
}
