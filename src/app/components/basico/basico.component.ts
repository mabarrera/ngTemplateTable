import { AfterContentInit, Component, ContentChild, ContentChildren, Input, OnInit, QueryList, TemplateRef } from '@angular/core';
import { TemplateDirective } from 'src/app/directives/template.directive';

@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styles: [
  ]
})
export class BasicoComponent implements OnInit, AfterContentInit {

  @ContentChildren( TemplateDirective ) templateList!: QueryList<TemplateDirective>
  
  @ContentChild(TemplateRef) public headTemplate!:TemplateRef<HTMLElement>
  @ContentChild(TemplateRef) public bodyTemplate!:TemplateRef<HTMLElement>

  @Input() value!:any[]
  @Input() head!:any[]

  constructor() { }

  ngOnInit(): void {
      console.log( this.value );
      
      
      
  }

  ngAfterContentInit(): void {
    const templates = this.templateList.toArray()    
    for( let template of templates ){
      if( template.ogTemplate === 'head' ){
        this.headTemplate = template.template
      } else if( template.ogTemplate === 'body' ){
        this.bodyTemplate = template.template
      }
    }

    console.log( this.headTemplate );
    console.log( this.bodyTemplate );
  }

}
