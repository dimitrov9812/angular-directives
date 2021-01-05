import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDerivativeExampleComponent } from './custom-derivative-example.component';

describe('CustomDerivativeExampleComponent', () => {
  let component: CustomDerivativeExampleComponent;
  let fixture: ComponentFixture<CustomDerivativeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDerivativeExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDerivativeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
