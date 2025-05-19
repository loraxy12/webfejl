import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationchildComponent } from './registrationchild.component';

describe('RegistrationchildComponent', () => {
  let component: RegistrationchildComponent;
  let fixture: ComponentFixture<RegistrationchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationchildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
