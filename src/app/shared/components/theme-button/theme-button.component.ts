import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemeColorService } from '../../services/themeColor.service';

@Component({
  selector: 'shared-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrl: './theme-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeButtonComponent implements OnInit {

  public themeSwitch = new FormControl(true);

  constructor(private theme: ThemeColorService){
  }

  ngOnInit(): void {
    this.themeSwitch.setValue(this.theme.loadLocalStorage());
    this.themeSwitch.valueChanges.subscribe(
      (value) =>{
        this.theme.changeTheme(value);
      }
    )
  } 



}
