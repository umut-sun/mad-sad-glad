import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadComponent } from './mad.component';

describe('MadComponent', () => {
  let component: MadComponent;
  let fixture: ComponentFixture<MadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MadComponent]
    });
    fixture = TestBed.createComponent(MadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
