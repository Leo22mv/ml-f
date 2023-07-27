import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACartComponent } from './a-cart.component';

describe('ACartComponent', () => {
  let component: ACartComponent;
  let fixture: ComponentFixture<ACartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ACartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ACartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
