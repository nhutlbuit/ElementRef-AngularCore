import { Component, Renderer2, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="idDiv">Hello world</div>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {

  constructor(private eltRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const native = this.eltRef.nativeElement;
    const id = native.getAttribute('idDiv');
   this.renderer.setStyle(this.eltRef.nativeElement, 'color', 'red');
    this.renderer.setStyle(this.eltRef.nativeElement, 'top', '200px');
  }
}
