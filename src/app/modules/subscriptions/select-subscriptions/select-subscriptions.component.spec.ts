import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSubscriptionsComponent } from './select-subscriptions.component';

describe('SelectSubscriptionsComponent', () => {
  let component: SelectSubscriptionsComponent;
  let fixture: ComponentFixture<SelectSubscriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSubscriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
