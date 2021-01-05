import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-for-example',
  templateUrl: './ng-for-example.component.html',
  styleUrls: ['./ng-for-example.component.css']
})
export class NgForExampleComponent implements OnInit {
  books: Object[];
  constructor() {
    this.books = [{
      name: 'Book1',
      author: 'Author 1',
      price: 20
    },
    {
      name: 'Book2',
      author: 'Author 2',
      price: 40
    },
    {
      name: 'Book3',
      author: 'Author 3',
      price: 24
    },
  ]
  }
  ngOnInit(): void {
  }

  loadBooks() {
    setTimeout(() => {
      this.books.push({
        name: 'New Book 2 ASYNC',
        author: 'New Author 2 ASYNC',
        price: 223
      })
    }, 2000);
    setTimeout(() => {
      this.books.push({
        name: 'New Book 3 ASYNC',
        author: 'New Author 3 ASYNC',
        price: 223
      })
    }, 4000);
    setTimeout(() => {
      this.books.push({
        name: 'New Book 1 ASYNC',
        author: 'New Author 1 ASYNC',
        price: 223
      })
    }, 1500);
  }
}
