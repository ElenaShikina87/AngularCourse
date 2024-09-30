import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdButtonComponent } from './new-ad-button.component';

describe('NewAdButtonComponent', () => {
  let component: NewAdButtonComponent;
  let fixture: ComponentFixture<NewAdButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAdButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAdButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
