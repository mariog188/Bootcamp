import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector: '[appMyHighlight]',
})
export class MyHighlightDirective {
	constructor(private element: ElementRef) {
		element.nativeElement.style.backgroundColor = 'yellow';
	}
}
