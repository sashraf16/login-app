import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardgeneralComponent } from './dashboardgeneral.component';

describe('DashboardgeneralComponent', () => {
  let component: DashboardgeneralComponent;
  let fixture: ComponentFixture<DashboardgeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardgeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardgeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
