import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClassOrientationComponent } from './edit-class-orientation.component';

describe('EditClassOrientationComponent', () => {
  let component: EditClassOrientationComponent;
  let fixture: ComponentFixture<EditClassOrientationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditClassOrientationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditClassOrientationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
