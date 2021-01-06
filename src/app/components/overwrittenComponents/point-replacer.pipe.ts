import {Pipe} from '@angular/core';
import {DecimalPipe} from '@angular/common';

@Pipe({
  name: 'pointReplacer'
})
export class PointReplacerPipe extends DecimalPipe {

  // @ts-ignore
  transform(value: any, digits?: string): string {
    // @ts-ignore
    return super.transform(value, digits).replace(',', '.');
  }

}
