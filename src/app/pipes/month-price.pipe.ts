import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthPrice'
})
export class MonthPricePipe implements PipeTransform {

  transform(value: number, rate: number): number {
    return (value*30)-rate;
  }

}
