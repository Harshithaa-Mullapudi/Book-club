import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.boxShadow') boxShadow: string | null = null;
  @HostBinding('style.transform') transform: string | null = null;
  @HostBinding('style.transition') transition = 'all 0.2s ease';

  @HostListener('mouseenter')
  onEnter() {
    this.boxShadow = '0 10px 20px rgba(0,0,0,0.20)';
    this.transform = 'translateY(-4px)';
  }

  @HostListener('mouseleave')
  onLeave() {
    this.boxShadow = null;
    this.transform = null;
  }
}
