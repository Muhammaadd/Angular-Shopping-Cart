import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScaleItem]'
})
export class ScaleItemDirective {

  constructor(private ele:ElementRef) {

    this.ele.nativeElement.style.transition = 'all .5s ease';
   }
   @HostListener ('mouseover') onMouseOver()
   {
    this.ele.nativeElement.style.transform ='scale(1.1,1.1)';
    this.ele.nativeElement.style.zIndex = '10';
   }

   @HostListener ('mouseleave') onMouseleave()
   {
    this.ele.nativeElement.style.transform ='scale(1,1)';
    this.ele.nativeElement.style.zIndex = '0';
   }

}
