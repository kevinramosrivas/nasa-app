import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-span-dangerous',
  templateUrl: 'span.dangerous.component.html',
  styleUrl: './span-dangerous.component.css',
})
export class SpanDangerousComponent { 
  @Input()
  public isDangerous = false;

}
