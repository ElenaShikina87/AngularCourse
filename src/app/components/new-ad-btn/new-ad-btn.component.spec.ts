import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdBtnComponent } from './new-ad-btn.component';

describe('NewAdBtnComponent', () => {
  let component: NewAdBtnComponent;
  let fixture: ComponentFixture<NewAdBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAdBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAdBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
