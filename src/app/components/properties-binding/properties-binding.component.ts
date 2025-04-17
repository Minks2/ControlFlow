import { Component } from '@angular/core';

@Component({
  selector: 'app-properties-binding',
  standalone: true,
  imports: [],
  templateUrl: './properties-binding.component.html',
  styleUrl: './properties-binding.component.css'
})
export class PropertiesBindingComponent {
  imgUrl="../../../assets/axolotejpeg.jpeg"
  isDisable=true;
  descImg:string= 'imagem axolote';

}
