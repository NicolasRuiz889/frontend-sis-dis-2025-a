import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassOrientationComponent } from './add-class-orientation.component';

describe('AddClassOrientationComponent', () => {
  let component: AddClassOrientationComponent;
  let fixture: ComponentFixture<AddClassOrientationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddClassOrientationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClassOrientationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
