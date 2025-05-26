import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivityCatalogComponent } from './add-activity-catalog.component';

describe('AddActivityCatalogComponent', () => {
  let component: AddActivityCatalogComponent;
  let fixture: ComponentFixture<AddActivityCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddActivityCatalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddActivityCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
