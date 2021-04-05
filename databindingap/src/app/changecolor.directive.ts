import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {

  @HostBinding('style.border') hostborder : string;
  @Input() color : string;

  

  constructor(private el : ElementRef,private renderer : Renderer2) {
    //this.renderer.setStyle(this.el.nativeElement,'color',this.color)
   }

  changeBgColor(color:string){
    this.renderer.setStyle(this.el.nativeElement,'color',color)
  }

  @HostListener('click') foo(){
    alert("something missing!!")
  }

  @HostListener('mouseenter') abc(){
    this.changeBgColor(this.color)
    this.hostborder = '4px solid green'
  }

  @HostListener('mouseleave') xyz(){
    this.changeBgColor('blue')
    this.hostborder = ""
  }


}
