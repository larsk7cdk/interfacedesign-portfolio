import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionsDesignComponent } from './interactions-design.component';

describe('InteractionsDesignComponent', () => {
  let component: InteractionsDesignComponent;
  let fixture: ComponentFixture<InteractionsDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionsDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionsDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
