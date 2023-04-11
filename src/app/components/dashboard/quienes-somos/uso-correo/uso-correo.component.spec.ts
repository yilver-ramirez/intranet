import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoCorreoComponent } from './uso-correo.component';

describe('UsoCorreoComponent', () => {
  let component: UsoCorreoComponent;
  let fixture: ComponentFixture<UsoCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsoCorreoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsoCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
