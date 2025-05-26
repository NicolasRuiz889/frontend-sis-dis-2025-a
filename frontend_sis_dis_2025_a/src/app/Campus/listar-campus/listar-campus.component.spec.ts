import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCampusComponent } from './listar-campus.component';

describe('ListarCampusComponent', () => {
  let component: ListarCampusComponent;
  let fixture: ComponentFixture<ListarCampusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarCampusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
