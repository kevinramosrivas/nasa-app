import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrl: './theme-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeButtonComponent { }
