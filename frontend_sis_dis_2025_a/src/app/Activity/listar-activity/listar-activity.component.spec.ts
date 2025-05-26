import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarActivityComponent } from './listar-activity.component';

describe('ListarActivityComponent', () => {
  let component: ListarActivityComponent;
  let fixture: ComponentFixture<ListarActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarActivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
