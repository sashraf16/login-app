import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteusersComponent } from './deleteusers.component';

describe('DeleteusersComponent', () => {
  let component: DeleteusersComponent;
  let fixture: ComponentFixture<DeleteusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
