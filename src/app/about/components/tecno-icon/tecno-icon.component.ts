import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'about-tecno-icon',
  templateUrl : './tecno-icon.component.html',
  styleUrl: './tecno-icon.component.css',
})
export class TecnoIconComponent {
  @Input() 
  public pathIcon: string = '';


}
