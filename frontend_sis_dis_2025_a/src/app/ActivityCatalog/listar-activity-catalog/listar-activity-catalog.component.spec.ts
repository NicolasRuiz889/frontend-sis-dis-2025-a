import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarActivityCatalogComponent } from './listar-activity-catalog.component';

describe('ListarActivityCatalogComponent', () => {
  let component: ListarActivityCatalogComponent;
  let fixture: ComponentFixture<ListarActivityCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarActivityCatalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarActivityCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
