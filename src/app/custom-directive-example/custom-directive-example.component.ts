import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-directive-example',
  templateUrl: './custom-directive-example.component.html',
  styleUrls: ['./custom-directive-example.component.css']
})
export class CustomDirectiveExampleComponent implements OnInit {
  selectedFormat: string;

  constructor() {
    this.selectedFormat = 'lowercase';
  }

  ngOnInit(): void {
  }
}
