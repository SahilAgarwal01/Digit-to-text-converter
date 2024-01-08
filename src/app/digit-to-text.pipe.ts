import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digitToText',
})
export class DigitToTextPipe implements PipeTransform {
  transform(value: number): string {
    if (value === 0) {
      return 'Zero';
    }

    const ones = [
      '',
      'One',
      'Two',
      'Three',
      'Four',
      'Five',
      'Six',
      'Seven',
      'Eight',
      'Nine',
    ];
    const teens = [
      'Ten',
      'Eleven',
      'Twelve',
      'Thirteen',
      'Fourteen',
      'Fifteen',
      'Sixteen',
      'Seventeen',
      'Eighteen',
      'Nineteen',
    ];
    const tens = [
      '',
      '',
      'Twenty',
      'Thirty',
      'Forty',
      'Fifty',
      'Sixty',
      'Seventy',
      'Eighty',
      'Ninety',
    ];

    if (value < 10) {
      return ones[value];
    } else if (value < 20) {
      return teens[value - 10];
    } else if (value < 100) {
      return (
        tens[Math.floor(value / 10)] +
        (value % 10 !== 0 ? ' ' + ones[value % 10] : '')
      );
    } else if (value < 1000) {
      return (
        ones[Math.floor(value / 100)] +
        ' Hundred' +
        (value % 100 !== 0 ? ' and ' + this.transform(value % 100) : '')
      );
    } else if (value < 100000) {
      return (
        this.transform(Math.floor(value / 1000)) +
        ' Thousand' +
        (value % 1000 !== 0 ? ' ' + this.transform(value % 1000) : '')
      );
    } else if (value < 10000000) {
      return (
        this.transform(Math.floor(value / 100000)) +
        ' Lakh' +
        (value % 100000 !== 0 ? ' ' + this.transform(value % 100000) : '')
      );
    } else {
      return 'Number out of range'; // Adjust as needed for larger numbers
    }
  }
}
