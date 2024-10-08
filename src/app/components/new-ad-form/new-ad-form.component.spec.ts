import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdFormComponent } from './new-ad-form.component';

describe('NewAdFormComponent', () => {
  let component: NewAdFormComponent;
  let fixture: ComponentFixture<NewAdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAdFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
