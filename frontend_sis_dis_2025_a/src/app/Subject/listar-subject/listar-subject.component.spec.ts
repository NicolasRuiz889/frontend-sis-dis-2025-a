import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSubjectComponent } from './listar-subject.component';

describe('ListarSubjectComponent', () => {
  let component: ListarSubjectComponent;
  let fixture: ComponentFixture<ListarSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarSubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
