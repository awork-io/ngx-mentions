import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[mentions]'
})
export class MentionDirective {

  constructor(private targetEditable: ElementRef) { }

  ngAfterContentInit(): void {
    const element: HTMLElement = this.targetEditable.nativeElement
    element.setAttribute('contenteditable', 'true')
  }
}
