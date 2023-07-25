import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ARegisterComponent } from './a-register.component';

describe('ARegisterComponent', () => {
  let component: ARegisterComponent;
  let fixture: ComponentFixture<ARegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ARegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ARegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
