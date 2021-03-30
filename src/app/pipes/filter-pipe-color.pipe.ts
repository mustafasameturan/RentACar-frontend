import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/color';

@Pipe({
  name: 'filterPipeColor'
})
export class FilterPipeColorPipe implements PipeTransform {

  transform(value: Color[], filterText: string ): Color[] {
    filterText = filterText?filterText.toLocaleLowerCase():"";

    let color = filterText?value
    .filter((c:Color)=>c.colorName.toLocaleLowerCase().indexOf(filterText)!==-1)
    :value;
    return color;
  }

}
