import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProgramComponent } from './listar-program.component';

describe('ListarProgramComponent', () => {
  let component: ListarProgramComponent;
  let fixture: ComponentFixture<ListarProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarProgramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
