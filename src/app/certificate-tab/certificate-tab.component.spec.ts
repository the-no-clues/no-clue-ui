import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateTabComponent } from './certificate-tab.component';

describe('CertificateTabComponent', () => {
  let component: CertificateTabComponent;
  let fixture: ComponentFixture<CertificateTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
