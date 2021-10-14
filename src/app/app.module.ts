import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { BasicoComponent } from './components/basico/basico.component';
import { TemplateDirective } from './directives/template.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    BasicoComponent,
    TemplateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
