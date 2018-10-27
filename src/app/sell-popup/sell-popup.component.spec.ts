import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellPopupComponent } from './sell-popup.component';

describe('SellPopupComponent', () => {
  let component: SellPopupComponent;
  let fixture: ComponentFixture<SellPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
