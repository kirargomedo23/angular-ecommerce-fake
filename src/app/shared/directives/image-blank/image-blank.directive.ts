import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImageBlank]'
})
export class ImageBlankDirective {

  constructor(
    private elementRef: ElementRef
  ) {

  }

  @HostListener("error")
  handleErrorImage() {
    //this.elementRef.nativeElement.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fnot-found_2748558&psig=AOvVaw1YU3Edq0fTaBP8pKNi-ChW&ust=1674482331111000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKDl1fiq2_wCFQAAAAAdAAAAABAD"
  }

}
