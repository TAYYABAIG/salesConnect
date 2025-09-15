import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TprComponent } from './tpr.component';

describe('TprComponent', () => {
  let component: TprComponent;
  let fixture: ComponentFixture<TprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TprComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
