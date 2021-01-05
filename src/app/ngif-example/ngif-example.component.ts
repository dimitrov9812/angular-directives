import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-if-example',
  templateUrl: './ngif-example.component.html',
  styleUrls: ['./ngif-example.component.css']
})
export class NgifExampleComponent implements OnInit {
  movies: string[] = ["Lord of the rings" ,"The Avengers"];
  isShown: boolean = true;
  newMovie: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  toggleVisibility() {
    this.isShown = !this.isShown
  }
  addMovie() {
    this.newMovie ? this.movies.push(this.newMovie) : null;
  }
  clearList() {
    return this.movies = [];
  }
}
