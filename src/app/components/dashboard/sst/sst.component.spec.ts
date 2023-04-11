import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSTComponent } from './sst.component';

describe('SSTComponent', () => {
  let component: SSTComponent;
  let fixture: ComponentFixture<SSTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SSTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SSTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
