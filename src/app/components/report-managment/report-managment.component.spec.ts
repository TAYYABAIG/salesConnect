import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportManagmentComponent } from './report-managment.component';

describe('ReportManagmentComponent', () => {
  let component: ReportManagmentComponent;
  let fixture: ComponentFixture<ReportManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportManagmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
