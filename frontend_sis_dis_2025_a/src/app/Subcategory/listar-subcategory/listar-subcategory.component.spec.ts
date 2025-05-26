import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSubcategoryComponent } from './listar-subcategory.component';

describe('ListarSubcategoryComponent', () => {
  let component: ListarSubcategoryComponent;
  let fixture: ComponentFixture<ListarSubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarSubcategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarSubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
