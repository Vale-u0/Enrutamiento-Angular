import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlistarUsuarioComponent } from './enlistar-usuario.component';

describe('EnlistarUsuarioComponent', () => {
  let component: EnlistarUsuarioComponent;
  let fixture: ComponentFixture<EnlistarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlistarUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlistarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
