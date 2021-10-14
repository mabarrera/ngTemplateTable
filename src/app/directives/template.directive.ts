import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ogTemplate]'
})
export class TemplateDirective {

  @Input('ogTemplate') ogTemplate!: string
  constructor( public readonly template: TemplateRef<any> ) { }

}
