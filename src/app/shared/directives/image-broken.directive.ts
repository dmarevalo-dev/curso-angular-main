import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImageBroken]'
})
export class ImageBrokenDirective {

  @Input() srcFallback: string = 'https://ih1.redbubble.net/image.485923660.1240/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg';

constructor(private elementRef: ElementRef) {}

@HostListener('error')
handleError() {
    const nativeElement: HTMLImageElement = this.elementRef.nativeElement;
    nativeElement.src = this.srcFallback;
    console.log("Esta imagen está rota", this.elementRef);
}

}
