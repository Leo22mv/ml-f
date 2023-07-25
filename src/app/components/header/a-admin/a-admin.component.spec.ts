import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAdminComponent } from './a-admin.component';

describe('AAdminComponent', () => {
  let component: AAdminComponent;
  let fixture: ComponentFixture<AAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
