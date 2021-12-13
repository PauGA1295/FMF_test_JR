import {AbstractControl} from '@angular/forms';

export class MyValidations{
  static joven(control : AbstractControl){
    const value = control.value;
    if(value < 18){
      return {joven:true};
    }
    return null;
  }
}
