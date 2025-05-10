import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarClassOrientationComponent } from './listar-class-orientation.component';

describe('ListarClassOrientationComponent', () => {
  let component: ListarClassOrientationComponent;
  let fixture: ComponentFixture<ListarClassOrientationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarClassOrientationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarClassOrientationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
