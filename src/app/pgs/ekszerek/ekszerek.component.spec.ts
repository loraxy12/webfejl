import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkszerekComponent } from './ekszerek.component';

describe('EkszerekComponent', () => {
  let component: EkszerekComponent;
  let fixture: ComponentFixture<EkszerekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EkszerekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EkszerekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
