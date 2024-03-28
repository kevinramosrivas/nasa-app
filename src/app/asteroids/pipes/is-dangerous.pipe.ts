import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'IsDangerous',
})
export class IsDangerousPipe implements PipeTransform {

  transform(value: boolean): string{
    if(value == true){
      return "Es peligroso"
    }
    return "No es peligroso"
  }

}

