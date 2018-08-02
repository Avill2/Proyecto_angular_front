import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserpassComponent } from './reserpass.component';

describe('ReserpassComponent', () => {
  let component: ReserpassComponent;
  let fixture: ComponentFixture<ReserpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
