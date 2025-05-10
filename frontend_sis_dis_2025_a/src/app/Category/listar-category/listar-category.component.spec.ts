import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCategoryComponent } from './listar-category.component';

describe('ListarCategoryComponent', () => {
  let component: ListarCategoryComponent;
  let fixture: ComponentFixture<ListarCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
