import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GladComponent } from './glad.component';

describe('GladComponent', () => {
  let component: GladComponent;
  let fixture: ComponentFixture<GladComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GladComponent]
    });
    fixture = TestBed.createComponent(GladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
