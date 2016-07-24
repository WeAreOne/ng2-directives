import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myAutoGrow]'
})
export class AutoGrowDirective {
  constructor(private el:ElementRef) {
  }

  @Input('myAutoGrow') width:string;

  @HostListener('focus') onFocus() {
    this.setWidth(this.width + 'px');
  }

  @HostListener('blur') onBlur() {
    this.setWidth('100px');
  }

  private setWidth(width:string) {
    this.el.nativeElement.style.width = width;
  }
}
