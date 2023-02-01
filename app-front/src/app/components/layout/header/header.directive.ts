import { Directive, ElementRef, Input } from '@angular/core';

declare const window: Window;

@Directive({
  selector: '[appHeader]',
})
export class HeaderDirective {
  @Input()
  menu = {
    fixed: true,
    animation: true,
  };

  constructor(private el: ElementRef) {
    if (this.menu.animation) {
      this.handleScroll(0);
      this.getScroll(this.handleScroll.bind(this));
    }
  }

  handleScroll(scroll: number | null) {
    const maxHeight = 150;
    const className = 'active';

    if (scroll && scroll > maxHeight) {
      this.el.nativeElement.classList.add(className);
      return;
    }
    this.el.nativeElement.classList.remove(className);
  }

  getScroll(handle: (d: number | null) => void) {
    if (window !== null) {
      window.addEventListener('scroll', () => handle(window.pageYOffset));
    }
  }
}
