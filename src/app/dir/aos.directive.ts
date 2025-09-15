// aos.directive.ts
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAos]'
})
export class AosDirective implements OnInit {
  @Input('appAos') animation!: string;
  @Input() aosDelay?: string;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.setAttribute('data-aos', this.animation);
    if (this.aosDelay) {
      this.el.nativeElement.setAttribute('data-aos-delay', this.aosDelay);
    }
  }
}
