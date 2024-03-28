import { CommonModule } from '@angular/common';
import {Component, Input } from '@angular/core';
import { messageParameters } from '../../interfaces/message.interface';

@Component({
  selector: 'app-message-asteroid',
  templateUrl : './message-asteroid.component.html',
  styleUrl: './message-asteroid.component.css',
})
export class MessageAsteroidComponent {
  @Input()
  public parameters:messageParameters ={
    imagePath:'',
    message:''
  };
 }
