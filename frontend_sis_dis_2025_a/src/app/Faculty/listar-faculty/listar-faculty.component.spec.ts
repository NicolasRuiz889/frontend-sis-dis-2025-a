import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFacultyComponent } from './listar-faculty.component';

describe('ListarFacultyComponent', () => {
  let component: ListarFacultyComponent;
  let fixture: ComponentFixture<ListarFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarFacultyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
