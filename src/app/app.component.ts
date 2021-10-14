import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngTemplateTable';
  
  people:any[] = [
    {
      "id": 1,
      "name": "Laura",
      "email": "lbutler0@latimes.com",
      "age": 47
    },
    {
      "id": 2,
      "name": "Walter",
      "email": "wkelley1@goodreads.com",
      "age": 37
    },
    {
      "id": 3,
      "name": "Walter",
      "email": "wgutierrez2@smugmug.com",
      "age": 49
    },
    {
      "id": 4,
      "name": "Jesse",
      "email": "jarnold3@com.com",
      "age": 47
    },
    {
      "id": 5,
      "name": "Irene",
      "email": "iduncan4@oakley.com",
      "age": 33
    }
  ]
  
headings = [
    'Id',
    'Name',
    'email',
    'age'
];

  // @ViewChild('id', { static: true }) id;
  // @ViewChild('name', { static: true }) name;
  // @ViewChild('des', { static: true }) des;
  // @ViewChild('exp', { static: true }) exp;

ngOnInit(): void {
  //this.cols.push(this.id, this.name, this.des, this.exp)
  //this.cols = this.employees
}

}
