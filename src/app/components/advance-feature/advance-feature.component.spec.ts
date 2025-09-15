import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceFeatureComponent } from './advance-feature.component';

describe('AdvanceFeatureComponent', () => {
  let component: AdvanceFeatureComponent;
  let fixture: ComponentFixture<AdvanceFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
