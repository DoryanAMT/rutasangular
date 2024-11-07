import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutablaComponent } from './menutabla.component';

describe('MenutablaComponent', () => {
  let component: MenutablaComponent;
  let fixture: ComponentFixture<MenutablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenutablaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenutablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
