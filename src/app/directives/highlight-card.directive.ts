import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightCard]'
})


export class HighlightCardDirective implements OnChanges {

  @Input() externalColor:string ='black';
  @Input('appHighlightCard') defaultColor:string ='red'

  constructor(private el:ElementRef<HTMLElement>) { 
    
    
  }
  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor=this.defaultColor;
  }
@HostListener('mouseover')
  over(){
    this.el.nativeElement.style.backgroundColor=this.defaultColor;
  }

  @HostListener('mouseout')
  out(){
    this.el.nativeElement.style.backgroundColor=this.externalColor;
  }
  

}
