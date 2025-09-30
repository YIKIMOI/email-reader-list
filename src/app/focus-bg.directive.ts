import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFocusBg]',
  standalone: true
})
export class FocusBgDirective {
  private color = '#fff3cd'; // 浅黄

  constructor(private el: ElementRef, private rd: Renderer2) {}

  @HostListener('focus') onFocus() {
    this.rd.setStyle(this.el.nativeElement, 'backgroundColor', this.color);
  }

  @HostListener('blur') onBlur() {
    this.rd.removeStyle(this.el.nativeElement, 'backgroundColor');
  }
}
