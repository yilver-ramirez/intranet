import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosDiferenciaComponent } from './nos-diferencia.component';

describe('NosDiferenciaComponent', () => {
  let component: NosDiferenciaComponent;
  let fixture: ComponentFixture<NosDiferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosDiferenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosDiferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
