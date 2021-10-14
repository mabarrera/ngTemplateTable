import { AfterViewInit, Component, ContentChild, EventEmitter, Input, OnInit, Output, QueryList, TemplateRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: [

  ]
})
export class TableComponent implements OnInit, AfterViewInit {

  @Input() data!: any[];
  @Input() colsTemplate!: TemplateRef<any>[];
  @Input() headings!: string[];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log( this.data );
    console.log( this.colsTemplate );
    console.log( this.headings );
  }

}
