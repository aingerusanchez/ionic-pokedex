import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetallePage } from './pokemon-detalle.page';

describe('PokemonDetallePage', () => {
  let component: PokemonDetallePage;
  let fixture: ComponentFixture<PokemonDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDetallePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
