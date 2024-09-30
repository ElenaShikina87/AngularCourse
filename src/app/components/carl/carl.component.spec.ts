import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarlComponent } from './carl.component';

describe('CarlComponent', () => {
  let component: CarlComponent;
  let fixture: ComponentFixture<CarlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
