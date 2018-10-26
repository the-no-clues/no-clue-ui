import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactTabComponent } from './impact-tab.component';

describe('ImpactTabComponent', () => {
  let component: ImpactTabComponent;
  let fixture: ComponentFixture<ImpactTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpactTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
