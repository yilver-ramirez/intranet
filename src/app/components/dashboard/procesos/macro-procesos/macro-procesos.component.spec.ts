import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroProcesosComponent } from './macro-procesos.component';

describe('MacroProcesosComponent', () => {
  let component: MacroProcesosComponent;
  let fixture: ComponentFixture<MacroProcesosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacroProcesosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacroProcesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
