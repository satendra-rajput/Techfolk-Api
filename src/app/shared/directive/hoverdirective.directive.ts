import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverdirective]',
  standalone: true
})
export class HoverdirectiveDirective {

  // @Input() appHighlight = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
    console.log('yello..')
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('red');
    console.log('red..')
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    console.log('helooo')
  }
}
