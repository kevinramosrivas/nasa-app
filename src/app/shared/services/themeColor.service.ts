import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeColorService {

  private themePrefer:string = 'dark';
  private body = document.querySelector('body')!;

  constructor() { }


  public changeTheme(value:boolean | null){
    if(value){
      this.body.setAttribute('data-bs-theme','dark');
      this.setLocalStorage('dark');
    }
    else{
      this.body.setAttribute('data-bs-theme','ligth');
      this.setLocalStorage('ligth');
    }

  }

  public loadLocalStorage(){
    if(!localStorage.getItem('theme-color')) return true;
    const color =  localStorage.getItem('theme-color')!;
    this.body.setAttribute('data-bs-theme',color);
    return color=='dark'?true:false;
  }

  private setLocalStorage(value:string){
    this.themePrefer = value;
    localStorage.setItem('theme-color',this.themePrefer);
  }

}
