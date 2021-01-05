import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-switch-example',
  templateUrl: './ng-switch-example.component.html',
  styleUrls: ['./ng-switch-example.component.css']
})
export class NgSwitchExampleComponent implements OnInit {
  viewMode = "home"
  constructor() { }

  ngOnInit(): void {
  }
}