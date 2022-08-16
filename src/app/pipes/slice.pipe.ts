import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(value: string | undefined , index:number): string | undefined {
    if(value)
    return value.slice(0,index);
    return undefined;
  }

}
