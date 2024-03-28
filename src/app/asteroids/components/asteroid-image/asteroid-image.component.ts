import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-asteroid-image',
  templateUrl :'./asteroid-image.component.html',
  styleUrl: './asteroid-image.component.css',
})
export class AsteroidImageComponent { 
  @Input()
  public imagePath:string ='';

  public isLoad:boolean = false;

  onLoad(){
    this.isLoad = true;
  }
}
