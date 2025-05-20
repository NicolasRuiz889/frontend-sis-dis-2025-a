import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditActivityCatalogComponent } from './edit-activity-catalog.component';

describe('EditActivityCatalogComponent', () => {
  let component: EditActivityCatalogComponent;
  let fixture: ComponentFixture<EditActivityCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditActivityCatalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditActivityCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
