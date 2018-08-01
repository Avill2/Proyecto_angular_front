import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaRestauranteComponent } from './reserva-restaurante.component';

describe('ReservaRestauranteComponent', () => {
  let component: ReservaRestauranteComponent;
  let fixture: ComponentFixture<ReservaRestauranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaRestauranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
