import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisplay]'
})
export class DisplayDirective {

  constructor(private ele:ElementRef) {
  }

@HostListener ('mouseover') onMouseOver()
  {
    // this.ele.nativeElement.style.visibility = 'visible';
  }

  @HostListener ('mouseleave') onMouseleave()
  {
    // this.ele.nativeElement.style.visibility = 'hidden';
   }
}
