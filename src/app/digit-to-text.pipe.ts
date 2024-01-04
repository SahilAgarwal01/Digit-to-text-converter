import { Pipe, PipeTransform } from '@angular/core';
import * as numberToWords from 'number-to-words';

@Pipe({
  name: 'digitToText'
})
export class DigitToTextPipe implements PipeTransform {

  transform(value: string): string {
    try{
      return numberToWords.toWords(parseInt(value));
    }catch(err){
      return "";
    }
  }

}
