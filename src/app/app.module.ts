import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgifExampleComponent } from './ngif-example/ngif-example.component';
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';
import { CustomDerivativeExampleComponent } from './custom-derivative-example/custom-derivative-example.component';

@NgModule({
  declarations: [
    AppComponent,
    NgifExampleComponent,
    NgSwitchExampleComponent,
    NgForExampleComponent,
    CustomDerivativeExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
