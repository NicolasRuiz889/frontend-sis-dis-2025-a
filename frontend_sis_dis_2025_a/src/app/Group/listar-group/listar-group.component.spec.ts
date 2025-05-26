import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarGroupComponent } from './listar-group.component';

describe('ListarGroupComponent', () => {
  let component: ListarGroupComponent;
  let fixture: ComponentFixture<ListarGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
